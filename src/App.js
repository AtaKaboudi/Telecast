import './App.css';
import React from 'react';

import NavBar from './components/navbar/navbar';
import Suggestions from './components/mainSuggestions/mainSuggestions';
import { useEffect, useState } from 'react'
import youtubeAPI from './services/youtubeAPI';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoFeed from './components/videoFeed/videoFeed';
function App() {
  let raw = {
    "kind": "youtube#searchListResponse",
    "etag": "dSGQk10MTV3QJnjsuS58pA5sSxA",
    "nextPageToken": "CBkQAA",
    "regionCode": "TN",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 25
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "Hvjqomo7dzF95y0RXc3kATwGL-U",
        "id": {
          "kind": "youtube#video",
          "videoId": "VK0y-YxKARQ"
        },
        "snippet": {
          "publishedAt": "2021-06-26T15:00:21Z",
          "channelId": "UC70Dib4MvFfT1tU6MqeyHpQ",
          "title": "30 Secrets I Never Knew About My DAD! *adopted?*",
          "description": "30 Secrets I Never Knew About My DAD! *adopted?* with Preston MERCH - http://www.firemerch.com ❤️ FRIENDS! Keeley - https://bit.ly/3gTBKii ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/VK0y-YxKARQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/VK0y-YxKARQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/VK0y-YxKARQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Preston",
          "liveBroadcastContent": "none",
          "publishTime": "2021-06-26T15:00:21Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Oau29LwveFFIu5WuNGVjXHC30rA",
        "id": {
          "kind": "youtube#video",
          "videoId": "N1nbmCkiicg"
        },
        "snippet": {
          "publishedAt": "2020-04-14T16:20:42Z",
          "channelId": "UCsT0YIqwnpJCM-mx7-gSA4Q",
          "title": "Win | Halim Yousfi | TEDxCarthage",
          "description": "Halim Yousfi who is a songwriter, singer, and the founder of the band Gultrah Sound System, takes his audience on a journey with music that knows no ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/N1nbmCkiicg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/N1nbmCkiicg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/N1nbmCkiicg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "TEDx Talks",
          "liveBroadcastContent": "none",
          "publishTime": "2020-04-14T16:20:42Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "GO08VvECzRoUKQUxLxI3NQ4Xzyg",
        "id": {
          "kind": "youtube#video",
          "videoId": "gred4MHKdfY"
        },
        "snippet": {
          "publishedAt": "2018-03-28T10:55:54Z",
          "channelId": "UCS3dfr0uOIC6OP-rSECVPMA",
          "title": "Naïka  - Before He Falls (Live at Berklee)",
          "description": "Naïka performs her original composition \"Before He Falls\" live at Berklee College of Music. Produced by Sharifa Headley and arranged by Aliya Cycon.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gred4MHKdfY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gred4MHKdfY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gred4MHKdfY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Berklee College of Music",
          "liveBroadcastContent": "none",
          "publishTime": "2018-03-28T10:55:54Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "GAX4tviRpo7-P5nkwBiVqbCZwM8",
        "id": {
          "kind": "youtube#video",
          "videoId": "8WgP_NzXdd8"
        },
        "snippet": {
          "publishedAt": "2019-02-05T14:59:41Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "When I Was Your Man - Bruno Mars (Lyrics)",
          "description": "© 2013 WMG. #BrunoMars #WhenIWasYourMan #Lyrics --",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/8WgP_NzXdd8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/8WgP_NzXdd8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/8WgP_NzXdd8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2019-02-05T14:59:41Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "1ebENrhr2-vPm8mmQN97poA-bUc",
        "id": {
          "kind": "youtube#video",
          "videoId": "-FQj9_ibjf0"
        },
        "snippet": {
          "publishedAt": "2021-06-26T18:50:37Z",
          "channelId": "UC9iDlvBVMyE4sazC_cjaJ2A",
          "title": "Spider&#39;s hug | Minecraft Anime ep 6 (part 1: Day time)",
          "description": "A Minecraft animation ep 5. Enjoy Follow me on: Twitter: https://twitter.com/DangoheartAni Reddit: https://www.reddit.com/user/M4Dheart.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-FQj9_ibjf0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-FQj9_ibjf0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-FQj9_ibjf0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Dangoheart Animation",
          "liveBroadcastContent": "none",
          "publishTime": "2021-06-26T18:50:37Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "tTSCkKBhTYm4vYcxgGow3T6Oskc",
        "id": {
          "kind": "youtube#video",
          "videoId": "POjaRb99T14"
        },
        "snippet": {
          "publishedAt": "2021-06-29T16:13:07Z",
          "channelId": "UCelk6aHijZq-GJBBB9YpReA",
          "title": "الشرطة التونسية تعتقل بائع البطيخ بعد تحطيمه أمام مقرها تنديدا بالرشوة",
          "description": "اعتقال بائع البطيخ في تونس بعد فيديو تنديده بالرشوة اعتقلت الشرطة التونسية الرجل الذي ظهر في فيديو يندد بطلب أعوان الأمن منه رشوة مقابل السماح له ببيع ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/POjaRb99T14/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/POjaRb99T14/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/POjaRb99T14/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "BBC News عربي",
          "liveBroadcastContent": "none",
          "publishTime": "2021-06-29T16:13:07Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "0MoN-OCld0JcbDLabKYnYQbm6LM",
        "id": {
          "kind": "youtube#video",
          "videoId": "qgmXPCX4VzU"
        },
        "snippet": {
          "publishedAt": "2017-09-19T13:25:26Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Photograph - Ed Sheeran (Lyrics)",
          "description": "-- Photograph - Ed Sheeran (Lyrics) ▶️Check out Josh Michaels song 'Awaken Now' on Spotify. It is gaining lots of popularity! Save & add it to your playlists!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qgmXPCX4VzU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qgmXPCX4VzU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qgmXPCX4VzU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2017-09-19T13:25:26Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "OSW3Vd7yQo-mexZ_lFGVhvrTIRY",
        "id": {
          "kind": "youtube#video",
          "videoId": "WEJhJNWEsXc"
        },
        "snippet": {
          "publishedAt": "2018-01-16T11:53:26Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Heart Attack - Demi Lovato (Lyrics)",
          "description": "Learn how to sing in only 30 days with these easy, fun video lessons! https://www.30daysinger.com/a/8328/BFzaEvmu -- Heart Attack - Demi Lovato (Lyrics) ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/WEJhJNWEsXc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/WEJhJNWEsXc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/WEJhJNWEsXc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2018-01-16T11:53:26Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "CMb09LGurWMmQrerIhe0TjcR_-M",
        "id": {
          "kind": "youtube#video",
          "videoId": "ysHNqInR3TE"
        },
        "snippet": {
          "publishedAt": "2019-04-26T14:26:34Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Lewis Capaldi - Someone You Loved (Lyrics) 🎵",
          "description": "#SomeoneYouLoved #LewisCapaldi #Pop #Lyrics #DopeLyrics Artwork by yuumei: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ysHNqInR3TE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ysHNqInR3TE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ysHNqInR3TE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2019-04-26T14:26:34Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "EHRTFb3-cKQPlRyvZJHLTddTTHQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "Dbf8PYnzRdo"
        },
        "snippet": {
          "publishedAt": "2020-04-06T14:45:36Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Surrender - Natalie Taylor (Lyrics) 🎵",
          "description": "Natalie Taylor - Surrender (Lyrics) Natalie Taylor - Surrender Here is the link to DL Surrender! http://apple.co/1PeknDr Get Surrender merch here!",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Dbf8PYnzRdo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Dbf8PYnzRdo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Dbf8PYnzRdo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2020-04-06T14:45:36Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "nWPlek2nAnewjYWobj-ey_Ewbb8",
        "id": {
          "kind": "youtube#video",
          "videoId": "hCkOlbL_WVs"
        },
        "snippet": {
          "publishedAt": "2017-09-26T13:16:47Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Because Of You - Kelly Clarkson (Lyrics)",
          "description": "-- Because Of You - Kelly Clarkson (Lyrics) Kelly Clarkson's Lyric Video For 'Because Of You'. -- Follow Kelly Clarkson Website: http://www.kellyclarkson.com ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hCkOlbL_WVs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hCkOlbL_WVs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hCkOlbL_WVs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2017-09-26T13:16:47Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "oBYtlkliSz464bwHwgjwdo2Gd7A",
        "id": {
          "kind": "youtube#video",
          "videoId": "Tur7i37z8dI"
        },
        "snippet": {
          "publishedAt": "2018-03-28T14:01:14Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Demons - Imagine Dragons (Lyrics)",
          "description": "Learn how to sing in only 30 days with these easy, fun video lessons! https://www.30daysinger.com/a/8328/BFzaEvmu -- \"Demons - Imagine Dragons (Lyrics)\" ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Tur7i37z8dI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Tur7i37z8dI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Tur7i37z8dI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2018-03-28T14:01:14Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "mBjkTJY9DpxRttkjfnmn0cTuvx8",
        "id": {
          "kind": "youtube#video",
          "videoId": "LNArCBr6rrs"
        },
        "snippet": {
          "publishedAt": "2018-08-18T13:36:29Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Payphone - Maroon 5 ft. Wiz Khalifa (Lyrics) 🎵",
          "description": "© 2012 A&M/Octone Records #Payphone #Maroon5 #DopeLyrics --",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LNArCBr6rrs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LNArCBr6rrs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LNArCBr6rrs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2018-08-18T13:36:29Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "EBcmaxMEE-WY2ImePy7goa4e2gg",
        "id": {
          "kind": "youtube#video",
          "videoId": "RPYumdhRMkU"
        },
        "snippet": {
          "publishedAt": "2017-08-27T13:27:38Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "One Call Away - Charlie Puth (Lyrics)",
          "description": "-- Charlie Puth's debut album Nine Track Mind is available now! Download: http://smarturl.it/NineTrackMind Stream: http://smarturl.it/StreamNTM Exclusive Nine ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/RPYumdhRMkU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/RPYumdhRMkU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/RPYumdhRMkU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2017-08-27T13:27:38Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "feRzWxc9RdKDFFfpfJr_S3hOxvs",
        "id": {
          "kind": "youtube#video",
          "videoId": "akaRg5C1VO8"
        },
        "snippet": {
          "publishedAt": "2018-09-26T12:00:01Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Selena Gomez &amp; The Scene - Who Says (Lyrics) 🎵",
          "description": "#WhoSays #SelenaGomez #DopeLyrics --",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/akaRg5C1VO8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/akaRg5C1VO8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/akaRg5C1VO8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2018-09-26T12:00:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "eKrL5-4STTAAvfWtDjZ1T09IW8E",
        "id": {
          "kind": "youtube#video",
          "videoId": "GD2_bkNgX5I"
        },
        "snippet": {
          "publishedAt": "2018-01-04T13:13:17Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Ellie Goulding - Love Me Like You Do (Lyrics)",
          "description": "Learn how to sing in only 30 days with these easy, fun video lessons! https://www.30daysinger.com/a/8328/BFzaEvmu -- Ellie Goulding - Love Me Like You Do ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/GD2_bkNgX5I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/GD2_bkNgX5I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/GD2_bkNgX5I/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2018-01-04T13:13:17Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "lEvhhRX5O2ncdebE64_mX1qcScQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "b9wbionpQ7E"
        },
        "snippet": {
          "publishedAt": "2021-01-10T13:07:46Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "drivers license - Olivia Rodrigo (Lyrics) 🎵",
          "description": "Olivia Rodrigo - drivers license (Lyrics) Lyrics video for \"drivers license\" by Olivia Rodrigo. Olivia Rodrigo - drivers license \"And I know we weren't perfect but ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/b9wbionpQ7E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/b9wbionpQ7E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/b9wbionpQ7E/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2021-01-10T13:07:46Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "CKbHxaZdMHTZlPQsJO9WlFE32mY",
        "id": {
          "kind": "youtube#video",
          "videoId": "dlcOORQFN2g"
        },
        "snippet": {
          "publishedAt": "2019-02-22T16:04:37Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "7 rings - Ariana Grande (Lyrics)",
          "description": "#7Rings #ArianaGrande #Lyrics #Pop © 2019 Republic Records, a Division of UMG Recordings, Inc. --",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/dlcOORQFN2g/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/dlcOORQFN2g/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/dlcOORQFN2g/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2019-02-22T16:04:37Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "epQpQ-7Xhh4BqsN1bFRiHkLxyyo",
        "id": {
          "kind": "youtube#video",
          "videoId": "5gBeLN2Jkng"
        },
        "snippet": {
          "publishedAt": "2017-07-29T13:40:43Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Attention - Charlie Puth (Lyrics)",
          "description": "Learn how to sing in only 30 days with these easy, fun video lessons! https://www.30daysinger.com/a/8328/BFzaEvmu -- Attention - Charlie Puth (Lyrics) ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/5gBeLN2Jkng/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/5gBeLN2Jkng/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/5gBeLN2Jkng/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2017-07-29T13:40:43Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "NttwFyIyVcUkoiMFGXar-wVv6-g",
        "id": {
          "kind": "youtube#video",
          "videoId": "4iNC0NXKyNE"
        },
        "snippet": {
          "publishedAt": "2017-12-28T13:36:49Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Stitches - Shawn Mendes (Lyrics)",
          "description": "Learn how to sing in only 30 days with these easy, fun video lessons! https://www.30daysinger.com/a/8328/BFzaEvmu -- Stitches - Shawn Mendes (Lyrics) ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4iNC0NXKyNE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4iNC0NXKyNE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4iNC0NXKyNE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2017-12-28T13:36:49Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "b1qRqQCC7qHl2muCfKPLn-gQjQY",
        "id": {
          "kind": "youtube#video",
          "videoId": "NfTS7gM7zQ0"
        },
        "snippet": {
          "publishedAt": "2020-02-01T14:52:56Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Christina Perri - A Thousand Years (Lyrics) 🎵",
          "description": "Christina Perri - A Thousand Years (Lyrics) \"a thousand years\" on itunes: http://atlr.ec/npHAdW Check out more Christina Perri: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/NfTS7gM7zQ0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/NfTS7gM7zQ0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/NfTS7gM7zQ0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2020-02-01T14:52:56Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "cuTP1DjGkIoK04Z9gwEyzZCeL5A",
        "id": {
          "kind": "youtube#video",
          "videoId": "73_DOquGBD4"
        },
        "snippet": {
          "publishedAt": "2018-04-07T15:00:24Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "All of Me - John Legend (Lyrics)",
          "description": "Learn how to sing in only 30 days with these easy, fun video lessons! https://www.30daysinger.com/a/8328/BFzaEvmu -- \"All of Me - John Legend (Lyrics)\" ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/73_DOquGBD4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/73_DOquGBD4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/73_DOquGBD4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2018-04-07T15:00:24Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "9b0j8QtbZXpQcX_BOq-cDYsSK5o",
        "id": {
          "kind": "youtube#video",
          "videoId": "HYMDfMMD3fw"
        },
        "snippet": {
          "publishedAt": "2018-09-15T13:34:39Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Maroon 5 - Moves Like Jagger (Lyrics) ft. Christina Aguilera",
          "description": "(C) 2011 A&M/Octone Records #MovesLikeJagger #Maroon5 #DopeLyrics #ChristinaAguilera --",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/HYMDfMMD3fw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/HYMDfMMD3fw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/HYMDfMMD3fw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2018-09-15T13:34:39Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "AOfMMW7wmNNQswDXErSv6nBthJg",
        "id": {
          "kind": "youtube#video",
          "videoId": "39-M0i0sOHE"
        },
        "snippet": {
          "publishedAt": "2019-01-04T13:31:00Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Meghan Trainor - Like I&#39;m Gonna Lose You (Lyrics) ft. John Legend",
          "description": "© 2015 Epic Records, a division of Sony Music Entertainment #MeghanTrainor #LikeImGonnaLoseYou #Lyrics --",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/39-M0i0sOHE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/39-M0i0sOHE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/39-M0i0sOHE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2019-01-04T13:31:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "f8yrjSPRSQbcB8xduj417TUSFA8",
        "id": {
          "kind": "youtube#video",
          "videoId": "pyYsSY1wxJY"
        },
        "snippet": {
          "publishedAt": "2018-08-21T13:14:25Z",
          "channelId": "UCvR2R7j218tzejtTsb_X6Rw",
          "title": "Bruno Mars - Talking To The Moon (Lyrics) 🎵",
          "description": "© 2011 WMG #TalkingToTheMoon #BrunoMars #DopeLyrics --",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pyYsSY1wxJY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pyYsSY1wxJY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pyYsSY1wxJY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "DopeLyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2018-08-21T13:14:25Z"
        }
      }
    ]
  }

  let [videosList, setVideosList] = useState(raw.items.map(element => { return ({ ...element.id, ...element.snippet }) }));
  useEffect(() => {
    youtubeAPI.search().then(res => {
      let newValue = res.data.items.map(element => { return ({ ...element.id, ...element.snippet }) })
      newValue[0].pageDetails = res.data.pageInfo;
      setVideosList(newValue);
    });
  }, [])

  function search(key) {
    youtubeAPI.search(key).then(res => setVideosList(res.data.items.map(element => { return ({ ...element.id, ...element.snippet }) })));
  }
  return (
    <div>
      <Switch>

        <Route path="/" render={(props) => <div>
          <NavBar search={search} />
          <Suggestions videosList={videosList} />
        </div>} exact />

        <Route path="/video/:videoId" component={VideoFeed} />
      </Switch>

    </div>
  )

}
export default App;



