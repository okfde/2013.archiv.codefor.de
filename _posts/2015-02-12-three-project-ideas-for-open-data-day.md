---
layout: post

title: Three ideas for Open Data Day 2015
author: Drew
excerpt: With one week until Open Data Day, here are three project ideas to jumpstart your creativity


images:
- imgname: redeploy-icon.png

---

[Open Data Day](http://de.opendataday.org) is only 7 days away, [the countdown has begun](http://de.opendataday.org/countdown)! With events in 13 cities across Germany, we're definitely going to see some new data sets published, new open data projects created and apps redeployed. But many people going to these events aren't going with a specific project in mind. So here are three ideas for what you can work on next Saturday.

# 3 Project ideas:
 1. [Add your hood to Click-that-Hood](#clickthathood)
 1. [Help animals in shelters find homes](#cutepets)
 1. [Contribute to an existing Code for Germany app](#contribute)

# Add your hood to Click-that-Hood<a name="clickthathood"></a>
[Click-that-hood](http://Click-that-hood.com) ([code](https://github.com/codeforamerica/click_that_hood)) is geo game based on open data. As the time counts down, you need to identify the geography of your city, country, or continent. It has data from lots of places all over the world, but it's missing some data from Germany. This Open Data Day, add your city.

![click that hood for German states](/assets/blog/click-that-hood-germany.png)

## How do I deploy it in my city?
There are [detailed howto instructions](https://github.com/codeforamerica/click_that_hood/wiki/How-to-add-a-city-to-Click-That-%E2%80%99Hood), but the short version is:

 1. Get map data from gov
 2. Convert map data to geojson
 3. Create a small metadata json with data about the area
 4. Commit it to the github repo for Click-That-Hood (Here is [a git commit for an example addition](https://github.com/codeforamerica/click_that_hood/commit/e62af310fdf2df523232427a45eaa853efc46ff3))

## Where in Germany has Click-that-hood already been deployed?
Here's where it has already been deployed:

 * German States, Augsburg, Bayern, Berlin, Cologne, Dresden, Hamburg, Nordrhein-Westfalen Municipalities
 * Ulm
 * Unna
 * Berlin
 * Koln
 * Hamburg
 * Munchen (Bayern States is done, but you could do city neighborhoods)

## Where in Germany is lacking geodata?
This Open Data Day, you can add geo data for any of these German cities:

 * Magdeburg
 * Paderborn
 * Munster
 * Gießen
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

Click-that-hood is a very quick project once you find the data. It's definitely a project that you can start and finish during the event.

# Help animals in shelters find homes<a name="cutepets"></a>

![CutePets twitterbot](/assets/blog/cutepetsdenver.png)

Last year in Denver, Colorado I made a twitter bot called [@CutePetsDenver](https://twitter.com/CutePetsDenver). Every few hours it gets data about adoptable animals and tweets adorable pics and info. As a part of their intake procedure, most city shelters & non-profit shelters take photos and record data about homeless animals. Generally this data rarely ever ends up in online places where people can see it, which is shame because it means animals stay homeless longer. Sometimes the data ends up on a shelter website, but it almost never ends up on social spaces online like twitter, facebook, instagram, and so on. The CutePets bot bridges that gap by taking info about adoptable animals and periodically sharing it on social media.

## 15 redeploys in the US, now let's redeploy it in Germany
 ![cutepets across america](/assets/blog/cutepets-across-america.png)

Only a few months after launching the first bot in Denver, people in other cities were working with the code and got it working with their city's animal shelter data. It has now been redeployed in 15 different US cities, including [Boston](https://twitter.com/CutePetsBoston), [San Francisco](https://twitter.com/CutePetsSF), [Austin](https://twitter.com/CutePetsAustin), and [Minneapolis](https://twitter.com/CutePetsMPLS). Now let's bring it to Germany!

## How do we redeploy it in Germany? (We need data)

There are [detailed deployment instructions](https://github.com/codeforamerica/cutepets), but the quick version is:

  1. Find a data source that provides animal data in an API (or make an API)
  1. Make a twitter account & twitter app name
  1. Fork the code and customize it for your shelter
  1. Deploy to heroku for free

Right now there is only one barrier to redeploying this project in German cities: we need pet data. If you're looking for a project for Open Data Day, you could work on getting the data opened up and deploy the first CutePets bot in your city.

## What exactly do we need?
In short, we need a simple API. The ideal solution would be an API that connects to a database for a shelter. If that's not possible, you can hack it together with scrapping. That's how I made the first version in Denver. Your API endpoint can be populated entirely by scraped data. In Denver we just scraped the data from a webpage, put it into a json API, then had wrote the twitter bot to consume that API. Later when I was able to get in touch with the owners of the data, we were able to create an API direct from their database.

If you take on this project for Open Data Day, check out [this specification that I wrote for pet data](https://github.com/drewrwilson/pet-data-format/blob/master/animals.json#L7-L20). If the data comes out fitting that json api, you would just need to connect the CutePets code to your API and (tada!) you have a twitter bot.

## More resources Background on CutePets bot project here: [Raise Your
 Paws If You Like Open
 Data](http://www.codeforamerica.org/blog/2014/04/28/raise-your-paws-if-you-like-open-data/). The
 code is available here, with step-by-step instructions for
 redeployment:
 [https://github.com/codeforamerica/cutepets](https://github.com/codeforamerica/cutepets).



# Contribute to an existing Code for Germany app<a name="contribute"></a>
![altglascontainer app](/assets/blog/altglascontainermap.png)

There are [dozens of apps from Code for Germany](http://codefor.de/projekte), some of them just need more data. For example, last year a team from Berlin's Open Data Day cleaned up some data about Altglascontainer and made [a filterable map of Altglascontainer locations](http://odd14.hackdash.org/projects/530749eba1777f9331000001). The problem is that they were only able to get data for one neighborhood in Berlin.

## How can you help?
 * *Add data to Berlin:* Living in Berlin? You could work on getting more of that data into the app. Maybe you can find a way to get the data for your neighborhood. Or maybe someone else's neighborhood? Or maybe all the neighborhoods in Berlin? :)
 * *Redeploy this project in your city:* Don't live in Berlin? If you can track down the data for your city's Altglascontainers, you can drop in the data and redeploy this app for your city. Or maybe you could use the code for another kind of open geo data?
 * *Contribute a feature:* No idea how to get this kind of data? No worries, you could also contribute code. I recently added [a feature to this project that allows a user to only see the 5 closest Altglascontainer](http://drewrwilson.com/altglas/). My thinking is that when you're trying to find your recycling you may not want a map of *all* locations, but instead would rather have just the 5 closest locations. You could come up a new feature for an existing project and send a pull request.


# What else? Other project ideas? Get in touch
Are you a member of a Lab and have a project that is ready for other people to redeploy? Or is there a dataset that you need for your app that and you need help from other people who could work on trying to get it? Or maybe there's a feature for your existing Lab project that you want help with. Get in touch, we may be able to help connect you with people. We'll have Code for Germany staff at a few different cities and would love to encourage people to work on redeployments and collaborating across the country.Email me if you ideas for redeployments: drew -a- codeforamerica.org.
