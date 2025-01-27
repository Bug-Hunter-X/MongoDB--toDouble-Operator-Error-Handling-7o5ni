```javascript
const query = {
  $expr: {
    $and: [
      {
        $ne: ['$field', null]
      },
      {
        $gt: [ { $toDouble: '$field' }, 10 ]
      }
    ]
  }
};

db.collection.find(query);
```