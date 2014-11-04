
# helpscout

  A Helpscout API for node.

## Installation

    $ npm install helpscout
    
## Example

Create a new Helpscout instance and query for mailboxes: 

```
var helpscout = require('helpscout')('apikey');
```

And query mailboxes:

```
helpscout.mailboxes.list(function (err, mailboxes) {
  // ..
});
```

Or select a mailbox:

```
var mailbox = require('helpscout')('apikey', 6314);
```

Then you can query mailbox conversations:

```
mailbox.conversations.list(function (err, conversations) {
  // ..
});
```

Get specific customer data by passing an email, for instance, as a parameter:

```
helpscout.customers.getCustomer({email:customer.email}, function(err,helpScoutCustomerData){ 
	// ..
});
```

## API

#### new Helpscout(apiKey)

Create a new `Helpscout` client to query `Mailboxes`.

#### #list([options,] callback)

Returns a [list of mailboxes](http://developer.helpscout.net/help-desk-api/mailboxes/list/), with options defaulted to:

```
{
    page: 1
}
```

#### new Helpscout(apiKey, mailboxId)

Create a new `Mailbox` client.

##### #conversations.list([options,] callback)

Returns a [list of conversations](http://developer.helpscout.net/help-desk-api/conversations/list/), with options defaulted to:

```
{
    page: 1,
    status: 'all'
    tag: null
}
```

## License

MIT