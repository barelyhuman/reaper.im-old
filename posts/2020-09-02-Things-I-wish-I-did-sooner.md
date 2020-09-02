---
title: Things I wish I did sooner
published: true
date: 2020-09-02
---

Being a self taught developer a lot of times the path you follow is arbitrary and there's a very rare change that 2 developers follow the same learning train.

One might start at Frontend development, stick to it and excel only at that, one might be a curious one and jump from language to language and try to learn everything he/she possibly can.

Neither one is a bad developer.

I wished I had a mentor, might have changed the way I look at code altogether and maybe even be a better coder but then I was always the guy who could teach himself instead of the guy who'd learn better from teachers.

Now, backstory aside, here's a list of things I wished I did sooner.

### Add these to your Toolbelt

- Git - I shouldn't even have to mention this anymore but GIT!
- Unix Basic Commands - [ls,cd,cat, grep, ps, sed, mv, pwd]
- Docker - Make your life a little more easier
- Dokku - Make it easier for deployments and app management

### Have a Go To Stack

Ironic coming from the person who changes his tech stack every 2 weeks but have a goto tech stack that you can depend on when confused on what to choose.

This helps you when you just want to test the waters and create a prototype or something where you wouldn't want to invest a lot of time setting up architechture but getting the base functionalities up and running to test. I've previously made the mistake of trying to start with the perfect architechture and failing to ever start the project because of that mind block.

I normally fallback on [express](https://github.com/expressjs/express) like most Node developer but it's mostly [ftrouter](https://github.com/barelyhuman/ftrouter) now and for a very good reason.

#### Here's a few web stack examples

These are all stacks that I've personally worked with and hence can recommend.

#### Express Starter (for Beginners / Intermediates)

- Express (Web/Rest Server)
- PGSQL (DB)
- Sequelize (ORM)
- Angular / React / Vue / Svelte / RiotJs (View Layer) (Suit yourself here...)

#### Hapi Starter (for Beginners / Intermediates)

- HapiJS (newer versions)
- MySQL(DB)
- Sequelize (ORM) / Knex (Query Builder)
- Angular / React / Vue / Svelte / RiotJs (View Layer) (Suit yourself here...)

Obviously you could add redis, ES , etc etc for additional requirements but I'll leave this to be the base you start off as.

#### What Stack do you use?

The one I use has an experimental server layer so I wouldn't recommend people use it right now but here goes,

- ftrouter (webserver layer)
- pgsql / mongo (db layer)
- knex.js (query builder)
- Next.js (view layer)

While I know Next.js can be used for the server part as well, I choose not too, I like keeping the UI and Server far away from each other , I did build a full monolith using Next.js but I figured the amount of control and deployment time can be both improved if I split them, the way I like it.

### Maintain a resource collection

Now this is one step people avoid now because everything is available on StackOverflow and various other blog posts and one of the reason I think there's a slow down in learning but that's a rant I can pick up later.

Have a place where you maintain code snippets , libraries , everything that you find useful. You can even store stack overflow answers if you'd like.

The point of having a resource collection is avoid fumbling around the web when you've solved a problem before already. I've written time formatters multiple times now, while not proud of it I still end up writing most of my logic again and again when I could've just picked it up from a previous code base but then looking through 100 repositories for it is a bad idea and I could write the formatter again till then.

If you've not seen it yet, [reaper.im](https://reaper.im) has a collections section where I now store snippets I use a lot or type again and again.

You don't have to do this to you website but use something like Github Gist to store these snippets and something like Pocket to store blog and website links.

### Learn to write tests.

While it's mostly a luxury and shouldn't be done for prototype projects to avoid spending a lot of time on it.
It is still mandatory for you to learn how to write tests and learn at-least one test engines. It can be a full batteries included test suite or it can be a split of test runner and test functions library separately.

As, when the codebase moves away from the prototype phase, it's necessary that you spend minimum time trying to figure out what has broken from an already working flow. Addition of new flows/functionalities will take longer since you have to now write tests for these too but you gotta do them just once and that one time should be done properly.

It's ironic that I'm giving this suggesstion when none of my repos actually have test cases but that's because none of them have moved out of the prototype stage to begin with and the only which as gone into proper production is [TillWhen](https://tillwhen.barelyhuman.dev) and it has test cases.

### Master your Code Editor

Last but not the least and probably the most important one of the bunch, keep digging through what your code editor has to offer. If you're using VSCode, learn to use it's task runners, learn to use it's inbuilt debugger, add visualiser plugins to test performance of code etc etc

If you're using Vim, learn to create macro recordings , get to know how to manipulate largers chunks of text faster.

Each famous editor has a few tricks up it's sleeves that can help you in productivity and getting faster at coding. As a programmer the editor is your home and the place you spend precious hours on. Learn It, Practice It, MASTER IT!

#### Where Do I look for these features?

Read through the release notes, check if a release has added something useful, try it out , check if it's easy to use when working on code to use this functionality. I use eslint's tasks in VsCode almost instantly at this point. Command + P , Run Task, Lint whole folder, my fingers do it in seconds and I don't have to wait for VS Code's internal plugin runners to do the linting and lint fixes as that slows down the editor on my low power hardware.

Yeah, I code on multiple hardware at once. Shocker!

Similarly, I've gotten so used to Vim's macro creator that I consider that to be the first thing that I think off when looking for repetetive tasks on the text.

### The End

Let me know [here](https://reaper.im/hire) if you'd like me to write about something and/or if you'd like to talk about something I wrote before.
