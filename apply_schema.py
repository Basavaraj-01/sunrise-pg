import psycopg2
import sys
import re

def get_uri(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    match = re.search(r'Connection URI:\s*(.*)', content)
    if match:
        return match.group(1).strip()
    return None

def apply_schema(uri, schema_path):
    try:
        with open(schema_path, 'r') as f:
            schema = f.read()
        
        conn = psycopg2.connect(uri)
        cur = conn.cursor()
        cur.execute(schema)
        conn.commit()
        cur.close()
        conn.close()
        print('Schema applied successfully')
    except Exception as e:
        print(f'Error applying schema: {e}')
        sys.exit(1)

if __name__ == "__main__":
    uri = get_uri('db/neon_setup.txt')
    if not uri:
        print("Could not find Connection URI in db/neon_setup.txt")
        sys.exit(1)
    apply_schema(uri, 'db/schema.sql')
