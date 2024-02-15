from sqlalchemy import create_engine
import pandas as pd

# Informations de connexion à la base de données MySQL
db_username = "isa"
db_password = "isa95"
db_host = 'localhost'  # par exemple, 'localhost' ou '34.201.52.118'
db_name = 'db'  # Nom de la base de données mis à jour

# Connexion à la base de données MySQL
engine = create_engine(f'mysql+pymysql://{db_username}:{db_password}@{db_host}/{db_name}')

# List of URLs to collect data from
urls = [
    "http://data.insideairbnb.com/france/nouvelle-aquitaine/bordeaux/2023-12-15/visualisations/listings.csv",
    "http://data.insideairbnb.com/united-states/ca/san-francisco/2023-12-04/visualisations/listings.csv",
    "http://data.insideairbnb.com/united-states/ny/new-york-city/2024-01-05/visualisations/listings.csv",
    "http://data.insideairbnb.com/the-netherlands/north-holland/amsterdam/2023-12-12/visualisations/listings.csv",
    "http://data.insideairbnb.com/spain/catalonia/barcelona/2023-12-13/visualisations/listings.csv",
    "http://data.insideairbnb.com/france/ile-de-france/paris/2023-12-12/visualisations/listings.csv"
]

# Create an empty list to store DataFrames
dfs = []

# Read data from each URL and append to the list
for url in urls:
    df = pd.read_csv(url)
    dfs.append(df)

# Concatenate all DataFrames into a single DataFrame
combined_df = pd.concat(dfs, ignore_index=True)


combined_df.to_sql('location', engine, if_exists='replace', index=False)
