{
  "rules": {
    "notifications": {
    "$uid": {
      ".indexOn": "time",
      ".read": "auth != null 
      && $uid === auth.uid 
      && query.orderByChild == 'time' 
      && query.limitToLast <= 10
      && !root.child('banned').child(auth.uid).exists()"
    }
    },
    "users": {
      ".indexOn": ["reference", "totalwin", "roundball", "mergechain", "720","ShootyClocks", "stacktheblocks", "spinbreakout", "hexa","match3030"],
      ".read": "auth != null 
      && !root.child('banned').child(auth.uid).exists()
      //&& query.limitToLast <= 500
      //free rules
      && (
        query.orderByChild == 'stacktheblocks'
      || query.orderByChild == 'spinbreakout'
      || query.orderByChild == 'hexa'
      || query.orderByChild == 'match3030'
        //premium rules
      || query.orderByChild == 'roundball'
      || query.orderByChild == 'mergechain'
      || query.orderByChild == '720'
      || query.orderByChild == 'ShootyClocks'
      //other things
        || query.orderByChild == 'reference'
      || query.orderByChild == 'totalwin')
      ",
    "$uid": {
      ".read": "auth != null",
        "isOnline": {
         ".write": "auth != null 
          && $uid === auth.uid
          && !root.child('banned').child(auth.uid).exists()
          && ((newData.exists() 
               && newData.isNumber() 
               && newData.val() == 1 
               && root.child('users').child(auth.uid).child('createdAt').exists()
               && !data.exists()) || data.exists())",
      },
        "haftalik": {
         ".write": "auth != null 
          && $uid === auth.uid
          && !root.child('banned').child(auth.uid).exists()
          && ((newData.exists() 
               && newData.isNumber() 
               && newData.val() == 1 
               && root.child('users').child(auth.uid).child('createdAt').exists()) || data.exists())",
      },
        "didtrial": {
         ".write": "auth != null 
          && $uid === auth.uid
          && !root.child('banned').child(auth.uid).exists()
          && newData.exists() 
          && newData.isNumber() 
          && newData.val() == 1 
          && root.child('users').child(auth.uid).child('createdAt').exists()",
      },
        "dil": {
         ".write": "auth != null 
          && $uid === auth.uid
          && !root.child('banned').child(auth.uid).exists()
          && ((newData.exists() 
               && newData.isNumber() 
               && newData.val() == 1 
               && root.child('users').child(auth.uid).child('createdAt').exists()) || data.exists())",
      },
        "where": {
         ".write": "auth != null 
          && $uid === auth.uid
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.exists() 
          && newData.isNumber() 
          && newData.val() >= 0
          && newData.val() < 8",
      },
        "coin": {
         ".write": "auth != null 
          && $uid === auth.uid
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.exists() 
          && newData.isNumber() 
          && newData.val() >= 0",
      },
        "nickname": {
         ".write": "auth != null 
          && $uid === auth.uid
          && newData.exists() 
          && data.val().toLowerCase() != 'nicksuspend'
          && newData.val().toLowerCase() != 'nicksuspend'
          && newData.val().toLowerCase() != 'muratunlu0'
          && newData.val().matches(/^[a-zA-Z0-9]+$/)
          && root.child('users').child(auth.uid).child('createdAt').exists()
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.val().length > 2 
          && newData.val().length < 26",
      },
        "instagram": {
         ".write": "auth != null 
          && $uid === auth.uid
          && newData.exists() 
          && newData.val().toLowerCase() != 'muratunlu0'
          && newData.val().toLowerCase() != 'instagram'
          && newData.val().matches(/^[a-zA-Z0-9._]+$/)
          && root.child('users').child(auth.uid).child('createdAt').exists()
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.val().length > 2 
          && newData.val().length < 26",
      },
        //free rules
        "stacktheblocks": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.exists()
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.isNumber() 
          && newData.val() >= 0
          && newData.val() < 9999",
      },
        "spinbreakout": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.exists()
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.isNumber() 
          &&  newData.val() >= 0
          && newData.val() < 999999",
      },
        "hexa": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.exists()
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.isNumber() 
          &&  newData.val() >= 0
          && newData.val() < 999999",
      },
        "match3030": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.exists()
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.isNumber() 
          &&  newData.val() >= 0
          && newData.val() < 999999",
      },
        //premium rules
        "roundball": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.exists()
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.isNumber() 
          && newData.val() >= 0
          && newData.val() < 9999",
      },
        "mergechain": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.exists()
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.isNumber() 
          && newData.val() >= 0
          && newData.val() < 80000",
      },
        "720": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.exists()
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.isNumber() 
          &&  newData.val() >= 0
          && newData.val() < 999999",
      },
         "ShootyClocks": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.exists()
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.isNumber() 
          && newData.val() >= 0
          && newData.val() < 999999",
      },
        //other things
        "token": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.exists()
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.val().length > 30
          && newData.val().length < 1000",
      },
        "reference": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.val() !== auth.uid
          && root.child('users').child(newData.val()).exists() 
          && !root.child('users').child(auth.uid).child('reference').exists() 
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.exists() 
          && !data.exists()",
      },
        "promocode": {
         ".write": "auth != null 
          && $uid === auth.uid 
          && newData.val() !== auth.uid
          && !root.child('users').child(auth.uid).child('promocodes').child(newData.val()).exists() 
          && root.child('promocodes').child(newData.val()).exists() 
          && root.child('users').child(auth.uid).child('createdAt').exists() 
          && root.child('users').child(auth.uid).child('isOnline').exists()
          && !root.child('banned').child(auth.uid).exists()
          && newData.exists() 
          && !data.exists()",
      },
        "$other": {
         ".write": false
        }  
      
    }
    },
        "version": {
         ".read": "auth != null && !root.child('banned').child(auth.uid).exists()"
        } ,
          "OnlineUsers": {
         ".read": true
        } ,
        "$other": {
         ".read": false
        }     
  }
}