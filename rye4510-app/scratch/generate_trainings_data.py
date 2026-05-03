
import re
import json

html_path = r'c:\Users\SAMSUNG\OneDrive\Documentos\010 Projetos\rye4510\pages-br\cand-online.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

sections_re = re.compile(r'<!-- (.*?) Start -->(.*?)<!-- \1 End -->', re.DOTALL)
sections = sections_re.findall(content)

output = []
for title, sec_content in sections:
    if 'Treinamento' not in title:
        continue
    
    gen_eval_re = re.search(r'<a[^>]*href=["\'](https://docs\.google\.com/[^"\']+)["\'][^>]*>Avaliação (de todo|do treinamento)[^<]*</a>', sec_content, re.IGNORECASE)
    gen_eval = gen_eval_re.group(1) if gen_eval_re else None

    causes_item_re = re.compile(r'<div class=["\']causes-item["\']>(.*?)</div>\s*</div>', re.DOTALL)
    items = causes_item_re.findall(sec_content)
    
    modules = []
    for item in items:
        iframe_re = re.search(r'<iframe src=["\']https://player\.vimeo\.com/video/([^"\?]+)(?:\?h=([^&"\']+))?.*?["\']', item)
        if not iframe_re:
            continue
        v_id = iframe_re.group(1)
        v_hash = iframe_re.group(2)
        full_v_id = f"{v_id}?h={v_hash}" if v_hash else v_id

        title_re = re.search(r'<h4[^>]*>(.*?)</h4>', item)
        m_title = title_re.group(1) if title_re else "Módulo"

        eval_re = re.search(r'<a[^>]*href=["\'](https://docs\.google\.com/[^"\']+)["\'][^>]*>Avaliação[^<]*</a>', item, re.IGNORECASE)
        eval_url = eval_re.group(1) if eval_re else None

        modules.append({
            "title": m_title,
            "vimeoId": full_v_id,
            "evaluationUrl": eval_url
        })
        
    s_id = title.strip().lower().replace(' ', '').replace('º', '')
    
    # Customize the subtitle based on id
    subtitle = ""
    icon = ""
    if s_id == "1treinamento":
        subtitle = "Módulos Iniciais de Orientação"
        icon = "<GraduationCap />"
    elif s_id == "2treinamento":
        subtitle = "Aprofundamento e Preparação"
        icon = "<Users />"
    elif s_id == "3treinamento":
        subtitle = "Desafios e Simulações"
        icon = "<Play />"
    elif s_id == "4treinamento":
        subtitle = "Preparação Final"
        icon = "<ClipboardCheck />"
    elif s_id == "5treinamento":
        subtitle = "Treinamento Exclusivo Anfitriãs"
        icon = "<Users />"
        s_id = "familias"

    output.append({
        "id": s_id,
        "title": title.strip() if s_id != 'familias' else "Para Famílias",
        "subtitle": subtitle,
        "icon": icon,
        "modules": modules,
        "generalEvaluation": gen_eval
    })

ts_content = [
    "import React from 'react';",
    "import { Play, ClipboardCheck, Users, GraduationCap } from 'lucide-react';",
    "",
    "export interface VideoModule {",
    "  title: string;",
    "  vimeoId: string;",
    "  evaluationUrl?: string;",
    "}",
    "",
    "export interface TrainingLevel {",
    "  id: string;",
    "  title: string;",
    "  subtitle: string;",
    "  icon: React.ReactNode;",
    "  modules: VideoModule[];",
    "  generalEvaluation?: string;",
    "}",
    "",
    "export const trainingLevels: TrainingLevel[] = ["
]

for level in output:
    ts_content.append("  {")
    ts_content.append(f"    id: '{level['id']}',")
    ts_content.append(f"    title: '{level['title']}',")
    ts_content.append(f"    subtitle: '{level['subtitle']}',")
    ts_content.append(f"    icon: {level['icon']},")
    ts_content.append(f"    generalEvaluation: {json.dumps(level['generalEvaluation'])},")
    ts_content.append("    modules: [")
    for mod in level['modules']:
        # To avoid problems with quotes and json dumps encoding, construct the object
        title_esc = mod['title'].replace("'", "\\'")
        v_id = mod['vimeoId']
        eval_url = mod['evaluationUrl']
        if eval_url:
            ts_content.append(f"      {{ title: '{title_esc}', vimeoId: '{v_id}', evaluationUrl: '{eval_url}' }},")
        else:
            ts_content.append(f"      {{ title: '{title_esc}', vimeoId: '{v_id}' }},")
    ts_content.append("    ]")
    ts_content.append("  },")

ts_content.append("];")

with open(r'c:\Users\SAMSUNG\OneDrive\Documentos\010 Projetos\rye4510\rye4510-app\src\data\treinamentosData.tsx', 'w', encoding='utf-8') as f:
    f.write("\n".join(ts_content))

print("Data exported to src/data/treinamentosData.tsx")
