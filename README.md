tmdb-script
===============================
[themoviedb.org](https://www.themoviedb.org/) offers an API to get movies data. This is a node console application to request data from [TMDb API](https://developers.themoviedb.org/4/getting-started) and store it in a local mongo database.


* **[About TMDb API](#about-tmdb-api)**
* **[Usage](#usage)**
* **[Contributing](#Contributing)**
* **[License](#License)**

<a name="about-tmdb-api"></a>
# About TMDb API
[![NPM](https://www.themoviedb.org/assets/static_cache/23e473036b28a59bd5dcfde9c671b1c5/images/v4/logos/312x276-primary-green.png)](https://nodei.co/npm/recommender/)
This product uses the TMDb API but is not endorsed or certified by TMDb. You can check out the api docs and try it out [here](https://developers.themoviedb.org/4/getting-started). In order to use the API you need to make an account and request an api key ([info](https://www.themoviedb.org/faq/api)).

<a name="usage"></a>
# Usage

![usage](http://i.imgur.com/4e2OUZb.gif)
In order to use the script first you need:
  - API key from tmdb.
  - Mongo database installed
  - npm install `tmdb-script` -g

Currently TMDb API can return `~332,751` movies and `~902,467` people in json format.If you are starting from scratch and do not have any data already the script will take a long time, because of the `40 requests` / `10 seconds` limitation. 
The script uses 4 collections to store the data:
  - Two main collections for movies and people
  - Two temporary collections which store the data temporary and then ask you at the end if you want to move the new data to the main collections. This is done because you can either start from scratch or you may run the script multiple times to update your database.

To use the script you need to make a `config.json` file like this:
```json
{
	"tmdbApiKey": "your-tmdb-api-key",
	"dbServer": "mongodb://localhost/moviedb",
	"mainMoviesCollection": "movie",
	"mainPeopleCollection": "person",
	"tmpMoviesCollection": "newmovie",
	"tmpPeopleCollection": "newperson"
}
```
  Start the script with `tmdb-script -c path/to/config.json` and follow the instructions. For help `tmdb-script --help`. 
  
  Steps:
  
- First the script will check if you have existing movies in your main movies collection.
- Then it will get the latest id from TMDb API and show you how much new movies are there.
- By accepting to download now, the script will download all new movies and data related to them (images, videos, keywords, similar movies etc...) and all people which are in the cast or crew of the new movies and not exists already. This data will be stored in the temporary collections.
- After everything is downloaded you will be given an option to transfer the new data to your main collections.

<a name="Contributing"></a>
### Contributing
Pull requests are welcome.

<a name="License"></a>
### License
MIT License

Copyright (c) 2017 Dimitar Andreev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
