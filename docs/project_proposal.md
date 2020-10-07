# Proposal 1
With the emerging attention in the cryptocurrency industry, people are intrigued about data mining to achieve the ultimate goal of solving for bitcoins; professional data mining firms must be able to quickly absorb the most information such as current news in the cryptocurrency industry, to understand the fast-changing trends; however, it would be very time-consuming to research each resource individually and grapple the most relevant information. Our team has a solution: a web application that uses two APIs to quickly provide the most relevant trending news (from sources including but not limited to Google News, Bloomberg, Wind, Wall Street Journal etc.) 

Starting by logging in with a Google account (or other third party authentications), the user first searches for and selects the cryptocurrency they're interested in (Bitcoin is the most typical). The selections will be saved to our own database and the information is folded and associated with the particular user. When users select a crypto, the database will send a request to relevant providers such as Google News for related articles of that crypto. Users will be able to view their cryptos on a market graph that shows valuation, historical performance, and comparisons with other cryptos. On top of the rudimentary analysis of cryptocurrency, the database will also provide relevant information of the current competitiveness of the data mining market as the targeted users are assumed to be potential firms who wish to make a profit by cryptocurrency, specifically the database could provide available information on a list of potential competitors the user registers with(using possible filtering criterion) with the competitors’ number of data centers and relevant server conditions (if applicable).

The two APIs we will incorporate are shown as follows:

- Google News API: https://newsapi.org/s/google-news-api
- Binance-Exchange API: https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md

# Proposal 2

Spotify is used among millions of users but does not offer full lyrics alongside the song within its application. The extent of Spotify’s implementation is with Genius Lyrics, offering parts of lyrics for some songs, but only covering a couple seconds. With this program users would be able to choose songs and immediately have all of the lyrics show up, without having to google each individual song. Users log in with facebook or other third party accounts and search for and like songs, with the artist and the track names being recorded into our database (associated with that user). When users click on a saved song, it will send the request to the lyric API, and it will print out the desired lyrics. Users can create playlists of their liked songs and organize them accordingly, making the experience more efficient. If the user’s Spotify account already has songs/playlists saved, they could automatically be imported to our database and have lyrics generated. 

The two APIs we will incorporate are shown as follows:

- Spotify API: https://developer.spotify.com/documentation/web-api/
- Lyrics API: https://apiseeds.com/documentation/lyrics

# Contributor
Kehan Wang,
Xiaochen Xue,
Malcolm Tom,
Yaoxingyue Zhao,
Yu Xia
