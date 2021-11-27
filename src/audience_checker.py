import pandas as pd
import VR_toolkit as vrt

def get_audiences(campaign):
    dbase_cursor = vrt.database_access("sports")
    query = """SELECT DISTINCT audience_bdr FROM campaigns_targets WHERE (platform_id = 6 AND client_id = '{}');""".format(campaign)
    dbase_cursor.execute(query)
    dbase = list(dbase_cursor.fetchall())
    df = pd.DataFrame(dbase)
    dbase_cursor.close()
    return df["audience_bdr"].to_list()

def get_audiences_TW(campaign):
    dbase_cursor = vrt.database_access("sports")
    query = """SELECT DISTINCT audience_bdr FROM campaigns_targets WHERE (platform_id = 3 AND client_id = '{}');""".format(campaign)
    dbase_cursor.execute(query)
    dbase = list(dbase_cursor.fetchall())
    df = pd.DataFrame(dbase)
    dbase_cursor.close()
    return df["audience_bdr"].to_list()
    
def count_entries(audience):
    dbase_cursor = vrt.database_access("sports")
    query1 = """SELECT COUNT(handle) FROM campaigns_targets WHERE (platform_id = 6 AND audience_bdr = '{}');""".format(audience)
    dbase_cursor.execute(query1)
    dbase = list(dbase_cursor.fetchall())
    df1 = pd.DataFrame(dbase)
    query2 = """SELECT COUNT(handle) FROM campaigns_targets WHERE (platform_id = 6 AND audience_bdr = '{}' AND date_outbound_next IS NULL AND interest_current = '');""".format(audience)
    dbase_cursor.execute(query2)
    dbase = list(dbase_cursor.fetchall())
    df2 = pd.DataFrame(dbase)
    print("{} / {} AVAILABLE FOR {}".format(df2.values[0], df1.values[0], audience))
    print("\n")

def count_entries_TW(audience):
    dbase_cursor = vrt.database_access("sports")
    query1 = """SELECT COUNT(handle) FROM campaigns_targets WHERE (platform_id = 3 AND audience_bdr = '{}');""".format(audience)
    dbase_cursor.execute(query1)
    dbase = list(dbase_cursor.fetchall())
    df1 = pd.DataFrame(dbase)
    query2 = """SELECT COUNT(handle) FROM campaigns_targets WHERE (platform_id = 3 AND audience_bdr = '{}' AND date_outbound_next IS NULL AND interest_current = '');""".format(audience)
    dbase_cursor.execute(query2)
    dbase = list(dbase_cursor.fetchall())
    df2 = pd.DataFrame(dbase)
    print("{} / {} AVAILABLE FOR {}".format(df2.values[0], df1.values[0], audience))
    print("\n")

def check_all(projects, mode=1):
    for project in projects:
        if mode == 2:
            audiences = get_audiences_TW(project)
        else:
            audiences = get_audiences(project)
        print(project)
        for audience in audiences:
            if mode == 2:
                count_entries_TW(audience)
            else:
                count_entries(audience)


project_hub = [
        "GC Linkedin",
        "Nunchee",
        "Adext",
        "Ricefx",
        "RTG",
        "Aya",
        "Apteo",
        "Scalefast"
    ]
check_all(project_hub, mode=1)