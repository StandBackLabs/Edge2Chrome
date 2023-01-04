# Edge 2 Chrome browser extension
![icon128](https://user-images.githubusercontent.com/29778397/210595291-b87af104-c3ed-4e8f-a8af-43b3ea1d3c6d.png)


### Spoof Chrome while Googling to avoid Google's anti-competitive behavior

A Microsoft Edge extension that changes all the User Agent related headers to match the headers sent by Google Chrome. Why wouuld you want to do this? It seems Google classifes search traffic from any non-Chrome web browsers as "suspicious network activity." I noticed while using Chrome, the constant CAPTCHA pages stopped... This extensions is still experimental, but for two days since creating it, I have had no CAPTCHAs.

### Why _this_ extensions?
User-Agent alone is not enough anymore - there are four total headers that must be modified to convince Google you are using Chrome:

* Sec-CH-UA
* Sec-CH-UA-Full-Version
* Sec-CH-UA-Full-Version-List
* User-Agent

See rules.json for the replacement values.

Note that this release has all the version numbers hard-coded. Manifest V3 is a complete dumpster fire of lost functionality, effectively making extensions useless. (Despite claims to the contrary, Google most likely made these changes to stop ad-blockers and make more $$$)

## Installation

* Install the extension from the Edge Extension store: [![icon32](https://user-images.githubusercontent.com/29778397/210595082-cdd58a1a-6a45-44e3-b332-dc36fb32dce9.png) Edge to Chrome for Google Search](https://microsoftedge.microsoft.com/addons/detail/lpeoldoobfcgkkineoaljjbcncmfbcfc)
* Download and extract the zip package (or clone the repo), enable developer mode in entensions and add unpacked extension



## Notes

The current matching regex is:
~~~
^https?:\/\/[a-z0-9\-\.]*((google|gstatic|googleusercontent|ytimg|youtube|googleapis)(\.[a-z0-9\-]+(\.[a-z]{2})?))(\/.*)?$
~~~

* Any scheme or no scheme
* subdomains or none to one of google's domains used in search (google, gstatic, googleusercontent, ytimg, youtube, googleapis)
* google TLD, google.Any TLD, google.co. or google.com. any two-character TLD
* NOTE: Permissions and rules use a different method of defining the URL, so presently non "google" domains are only supported for .com.



## TODO Items

* Detect the CPU architecture and OS and update the User Agent appropriately
* Detect the Chromium version used by Edge so the versions won't require extension updates
* Add an indicator to the icon when it is active on a page
* Add a configuration page to allow users to customize the UA
* Add Firefox support (firefox will be easier using manifest v2)

Please submit any issues or feature requests!

