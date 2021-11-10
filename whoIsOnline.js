const whosOnline = (friends) => {
    // Your code here...
     let newarr = {
       online: [],
       offline: [],
       away: [],
     };
     friends.forEach((friend) => {
       if (friend.status === "offline") {
         newarr.offline.push(friend.username);
       } else if (friend.status === "online") {
         if (friend.lastActivity > 10) {
           newarr.away.push(friend.username);
         } else {
           newarr.online.push(friend.username);
         }
       }
     });
     if (newarr.online.length == 0) delete newarr.online;
     if (newarr.offline == 0) delete newarr.offline;
     if (newarr.away == 0) delete newarr.away;
     return newarr;
   };