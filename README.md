# Edge2Chrome
Extension that makes Microsoft Edge spoof Google Chrome

When using Microsoft Edge, but using Google as your primary search engine, you may encounter frequent CAPCHAs claiming your network may be compromised.

It seems this page is deceptive - when using Google's browser I do not experience it. When using Edge, I am harassed every couple hours.


This is sort-of an experiment - I haven't confirmed with 100% certainty that it eliminates the CAPCHAs - I've had it installed for 8 hours without a CAPCHA.


Unfortunately, this extension is going to be difficult to create using the dumpster fire that is manifest v3 - it may be time to switch to Firefox once and for all...

Both the Chrome Web Store and the Edge store are no longer accepting manifest v2. The problem is, we need to _READ_ the headers and apply a RegEx to the values - simply appending or replacing is not an option.

Manifest V3 was created primarily so Google could make more ad revenue. The so-called security provided is artificial. I will be testing this plugin on Firefox soon.

