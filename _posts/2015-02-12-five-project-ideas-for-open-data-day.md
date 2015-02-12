---
layout: post

title: Five ideas for Open Data Day 2015
author: Drew
excerpt: With one week until Open Data Day 2015, here are five projects to jumpstart your creativity

---

[Open Data Day](http://de.opendataday.org) is only 7 days away, [the countdown has begun](http://de.opendataday.org/countdown)! With events in 13 cities across Germany, we're definitely going to see some new data sets published, new open data projects created and apps redeployed. But many people going to these events aren't going with a specific project in mind. So here are five ideas for what you can work on next Saturday.

# 1. Add your hood to Click-that-Hood
[Click-that-hood](http://Click-that-hood.com) ([code](https://github.com/codeforamerica/click_that_hood)) is geo game based on open data. As the time counts down, you need to identify the geography of your city, country, or continent. It has data from lots of places all over the world, but it's missing some data from Germany. This Open Data Day, add your city.

![click that hood for German states](/assets/blog/click-that-hood-germany.png)

## How do I deploy it in my city?
There are [detailed howto instructions]()https://github.com/codeforamerica/click_that_hood/wiki/How-to-add-a-city-to-Click-That-%E2%80%99Hood, but the short version is:
 # Get map data from gov
 # Convert map data to geojson
 # Create a small metadata json with data about the area
 # Commit it to the github repo for Click-That-Hood (Here is [a git commit for an example addition](https://github.com/codeforamerica/click_that_hood/commit/e62af310fdf2df523232427a45eaa853efc46ff3))

## Where in Germany has it already been deployed?
There is currently only some German data in Click-that-hood. Here's the list:
 * German States, Augsburg, Bayern, Berlin, Cologne, Dresden, Hamburg, Nordrhein-Westfalen Municipalities, Ulm, Unna
 * Berlin
 * Koln
 * Hamburg
 * Munchen (Bayern States is done, but you could do city neighborhoods)

## Where in Germany is lacking geodata?
This Open Data Day, you can add geo data for any of these German cities:
 * Magdeburg
 * Paderborn
 * Munster
 * Giessen
 * Frankfurt
 * Chemnitz
 * Dresden
 * Jena
 * Leipzig
 * Heilbronn
 * Stuttgart
 * München (Bayern States is done, could do neighborhoods)
 * Karlsruhe
 * Freiburg
 * Ulm

# 2. Help animals in shelters find homes

![CutePets twitterbot](/assets/blog/cutepetsdenver.png)

Last year in Denver, Colorado I made a twitter bot called [@CutePetsDenver](https://twitter.com/CutePetsDenver). Every few hours it gets data about adoptable animals and tweets adorable pics and info. As a part of their intake procedure, most city shelters & non-profit shelters take photos and record data about homeless animals. Generally this data doesn't end up in places where people can see it. The data about adoptable animals rarely ever ends up in online places people can see it, which is shame because it means animals stay homeless longer. Sometimes the data ends up on a shelter website, but it almost never ends up on social spaces online like twitter, facebook, instagram, and so on. The CutePets bot bridges that gap by taking info about adoptable animals and periodically sharing it on social media.

## 15 redeploys in the US, now let's bring redeploy it in Germany
 ![cutepets across america](/assets/blog/cutepets-across-america.png)

 Only a few months after launching the first bot in Denver, people in other cities were working with the code and got it working with their city's animal shelter data. It's now been redeployed in 15 different US cities, including [Boston](https://twitter.com/CutePetsBoston), [San Francisco](https://twitter.com/CutePetsSF), [Austin](https://twitter.com/CutePetsAustin), and [Minneapolis](https://twitter.com/CutePetsMPLS). Let's bring it to Germany!

## How do we redeploy it in Germany? We need data

 There are [detailed deployment instructions](https://github.com/codeforamerica/cutepets), but the quick version is:
  * Find a data source that provides animal data in an API (or make an API)
  * Make a twitter account & twitter app name
  * Fork the code and customize it for your shelter
  * Deploy to heroku for free

 Right now there is only one barrier to redeploying this project in German cities: we need pet data. If you're looking for a project for Open Data Day, you could work on getting the data opened up and deploy the first CutePets bot in your city.

## What exactly do we need?
 In short, we need a simple API. The ideal solution would be an API that connects to a database for a shelter. If that's not possible, you can hack it together with scrapping. That's how I made the first version in Denver. Your API endpoint can be populated entirely by scraped data. In Denver we just scraped the data from a webpage, put it into a json API, then had wrote the twitter bot to consume that API. Later when I was able to get in touch with the owners of the data, we were able to create an API direct from their database.

 If you are interested in doing such a thing this open data, check out [this specification that I wrote for pet data](https://github.com/drewrwilson/pet-data-format/blob/master/animals.json#L7-L20). If the data comes out fitting that json api, you would just need to connect the CutePets code to your API and (tada!) you have a twitter bot.

## More resources
 You can read the background on it here: [Raise Your Paws If You Like Open Data](http://www.codeforamerica.org/blog/2014/04/28/raise-your-paws-if-you-like-open-data/). The code is available here, with step-by-step instructions for redeployment: [https://github.com/codeforamerica/cutepets](https://github.com/codeforamerica/cutepets).


# 3. Contribute to an existing Code for Germany app
![altglascontainer app](/assets/blog/altglascontainermap.png)

There are [dozens of apps from Code for Germany](https://codefor.de/projekte), some of them just need more data. For example, last year a team from Berlin's Open Data Day cleaned up some data about Altglascontainer and made [a filterable map of Altglascontainer locations](odd14.hackdash.org/projects/530749eba1777f9331000001). The problem is that they were only able to get data for one neighborhood in Berlin. You can contribute to this

## How can you help?
 * *Add data to Berlin:* Living in Berlin? You could work on getting more of that data into the app. Add your neighborhood. Or add someone else's neighborhood. Or add all the neighborhoods in Berlin. Anything helps.
 * *Redeploy it in your city:* Live in another German city? If you can track down the data for your city's Altglascontainers, you can drop in the data and redeploy this app for your city.
 * *Contribute a feature:* No idea how to get this kind of data? No worries, you could also contribute code. I recently added [a feature to this project that allows a user to only see the 5 closest Altglascontainer](http://drewrwilson.com/altglas/). My thinking is that when you're trying to find your recycling you may not want a map of all locations, but instead would rather have just the 5 closest ones. You could come up a new feature for an existing project and send a pull request.
