from geopy.geocoders import Nominatim
import csv

geolocator = Nominatim(user_agent="coronavirus_data")
rowList = []
thereIsACounty = True
countyCount = 0
pathName = "../coronavirus_cases"

print("(1) lat/lng or (2) names?")
whichData = input()

if whichData is "1":
    rowList = [["lat", "lng", "county"]]
    pathName += "_coords.csv"

    while thereIsACounty:
        print("What county is affected?")
        county = input()

        print("How many are affected?")
        amountInCounty = input()

        if int(amountInCounty) is 0:
            thereIsACounty = False
            break

        countySubstring = "county"
        hasCounty = county.lower().find(countySubstring)
        if hasCounty is -1:
            county = county.capitalize() + " " + countySubstring.capitalize()

        location = geolocator.geocode(county + " New Jersey")
        lat = location.latitude
        lng = location.longitude

        for i in range(int(amountInCounty)):
            rowList.append([lat, lng, county])

        countyCount += 1

        print("Is there another county affected? (y or n)")
        stillACounty = input()

        if stillACounty is "n":
            thereIsACounty = False
elif whichData is "2":
    rowList = [["id", "value"]]
    pathName += "_names.csv"

    while thereIsACounty:
        print("What county is affected?")
        county = input()

        print("How many are affected?")
        amountInCounty = input()

        countySubstring = "county"
        hasCounty = county.lower().find(countySubstring)
        if hasCounty is -1:
            county = county.capitalize() + " " + countySubstring.capitalize()

        rowList.append([county, amountInCounty])

        print("Is there another county affected? (y or n)")
        stillACounty = input()

        if stillACounty is "n":
            thereIsACounty = False

print(pathName)

with open(pathName, 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(rowList)

print("CSV created successfuly!")
