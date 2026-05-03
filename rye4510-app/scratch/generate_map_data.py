
import re
import json

html_path = r'c:\Users\SAMSUNG\OneDrive\Documentos\010 Projetos\rye4510\pages-br\d4510.html'
clubes_path = r'c:\Users\SAMSUNG\OneDrive\Documentos\010 Projetos\rye4510\pages-br\d4510-clubes.html'

# Extract names from d4510-clubes.html
names_map = {}
with open(clubes_path, 'r', encoding='utf-8') as f:
    clubes_content = f.read()

city_detail_re = re.compile(r'id=["\'](region\d+)["\'].*?<h1>(.*?)</h1>', re.DOTALL)
for rid, name in city_detail_re.findall(clubes_content):
    names_map[rid] = name.strip()

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Certified IDs
certified_ids = [
    'region0', 'region15', 'region46', 'region65', 'region67', 'region49', 'region114', 
    'region159', 'region179', 'region190', 'region326', 'region328', 'region393', 
    'region397', 'region399', 'region438', 'region463', 'region473', 'region464', 
    'region491', 'region496', 'region602', 'region616', 'region635'
]

# Uncertified IDs
uncertified_ids = [
    'region160', 'region189', 'region309', 'region339', 'region388', 'region389', 
    'region398', 'region404', 'region446', 'region462', 'region465', 'region468', 
    'region475', 'region533', 'region617'
]

# No Club IDs
no_club_ids = [
    'region9', 'region26', 'region38', 'region81', 'region100', 'region102', 
    'region147', 'region162', 'region169', 'region174', 'region175', 'region181', 
    'region183', 'region184', 'region215', 'region219', 'region223', 'region227', 
    'region236', 'region238', 'region247', 'region289', 'region294', 'region314', 
    'region322', 'region323', 'region325', 'region353', 'region360', 'region361', 
    'region373', 'region384', 'region392', 'region409', 'region418', 'region430', 
    'region443', 'region446', 'region457', 'region465', 'region469', 'region471', 
    'region475', 'region484', 'region501', 'region505', 'region509', 'region510', 
    'region526', 'region533', 'region540', 'region551', 'region589', 'region601', 
    'region606'
]

def get_status(rid):
    if rid in certified_ids: return 'certified'
    if rid in uncertified_ids: return 'uncertified'
    if rid in no_club_ids: return 'no-club'
    return 'outside'

def get_color(status):
    if status == 'certified': return '#0067c8'
    if status == 'uncertified': return '#b9d9eb'
    if status == 'no-club': return '#f7a81b'
    return '#C1C1C1'

# Regex for path tags
path_tag_re = re.compile(r'<path\s+[^>]*?id=["\']?(\w+)["\']?[^>]*?\s+d=["\'](.*?)["\']', re.DOTALL)
matches = path_tag_re.findall(content)

output = [
    "import { RegionData } from './districtMapTypes';",
    "",
    "export const districtRegions: RegionData[] = ["
]

for rid, d in matches:
    status = get_status(rid)
    color = get_color(status)
    name = names_map.get(rid, "")
    d_clean = " ".join(d.split())
    item = {
        "id": rid,
        "dataId": rid,
        "d": d_clean,
        "fill": color,
        "status": status,
        "name": name
    }
    output.append(f"  {json.dumps(item)},")

output.append("];")

with open(r'c:\Users\SAMSUNG\OneDrive\Documentos\010 Projetos\rye4510\rye4510-app\src\data\districtMapData.ts', 'w', encoding='utf-8') as f:
    f.write("\n".join(output))

print(f"Generated {len(matches)} regions with external type import.")
