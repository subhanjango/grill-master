##How to run?

>npm install
>node index.js

##What was my thought process?

After reading the problem I immediately had an idea that this problem is somewhat related to area. Intially I started to setup the code base with the required modules and in the process I came up with the solution that how about I start calculating the area of each grill and compare it with the remaining area of the grill box and see if the grill can fit inside the grill box or not.

##How I can make it better?

The first step I should take to make it better is to improve the UI/UX of this project and need to improve the calculation algorithm as its not the most efficient one implemented.

##How you can scale for unanticipated queries, like “what if this application will be used in a
restaurant where there are many grills and many grill masters”.

As there is no database involved for now the biggest bottleneck is out of our way. To make sure the server keeps on serving N number of requests gracefully we can implement PM2 module on our server to host this application in cluster mode as it works in round robin manner to distribute work load among available workers because we can have as many workers as we want, they're not limited by the number of available CPU cores.

