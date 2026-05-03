
import re
import json

html_path = r'c:\Users\SAMSUNG\OneDrive\Documentos\010 Projetos\rye4510\pages-br\cand-online.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# I will find each section.
# <!-- 1º Treinamento Start --> to <!-- 1º Treinamento End -->
sections_re = re.compile(r'<!-- (.*?) Start -->(.*?)<!-- \1 End -->', re.DOTALL)
sections = sections_re.findall(content)

output = []

for title, sec_content in sections:
    if 'Treinamento' not in title:
        continue
    
    # Extract general evaluation if exists
    # <a ... href="URL">Avaliação de todo o ...</a>
    gen_eval_re = re.search(r'<a[^>]*href=["\'](https://docs\.google\.com/[^"\']+)["\'][^>]*>Avaliação (de todo|do treinamento)[^<]*</a>', sec_content, re.IGNORECASE)
    gen_eval = gen_eval_re.group(1) if gen_eval_re else None

    # Extract modules
    # Each module is within a causes-item
    causes_item_re = re.compile(r'<div class=["\']causes-item["\']>(.*?)</div>\s*</div>', re.DOTALL)
    items = causes_item_re.findall(sec_content)
    
    modules = []
    for item in items:
        # vimeo iframe
        iframe_re = re.search(r'<iframe src=["\']https://player\.vimeo\.com/video/([^"\?]+)(?:\?h=([^&"\']+))?.*?["\']', item)
        if not iframe_re:
            continue
        v_id = iframe_re.group(1)
        v_hash = iframe_re.group(2)
        full_v_id = f"{v_id}?h={v_hash}" if v_hash else v_id

        # title
        title_re = re.search(r'<h4[^>]*>(.*?)</h4>', item)
        m_title = title_re.group(1) if title_re else "Módulo"

        # eval url
        eval_re = re.search(r'<a[^>]*href=["\'](https://docs\.google\.com/[^"\']+)["\'][^>]*>Avaliação[^<]*</a>', item, re.IGNORECASE)
        eval_url = eval_re.group(1) if eval_re else None

        modules.append({
            "title": m_title,
            "vimeoId": full_v_id,
            "evaluationUrl": eval_url
        })
        
    output.append({
        "id": title.strip().lower().replace(' ', '').replace('º', ''),
        "title": title.strip(),
        "modules": modules,
        "generalEvaluation": gen_eval
    })

print(json.dumps(output, indent=2, ensure_ascii=False))
