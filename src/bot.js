const bs4 = require('jssoup')
const Discord = require('discord.js');
const Sched = require('node-schedule');
const reminders = require('remindersData').reminders

const client = new Discord.Client();

function remindAt(options) {
    let {dayOfWeek, hour, minute, channelID, message} = options

    let rule = new Sched.RecurrenceRule()
    rule.dayOfWeek = dayOfWeek
    rule.hour = hour
    rule.minute = minute

    let channel = client.channels.cache.get(channelID)
    let job = function () {
        channel.send(message)
    }

    Sched.scheduleJob(rule, job)

}

function loadReminders() {
    let cachedReminder

    for (let entry of reminders) {
        let reminder = cachedReminder

        for (let key of Object.keys(entry)) {
            reminder[key] = entry[key]
        }

        cachedReminder = reminder
        remindAt(reminder)
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    loadReminders()
});

client.login([TOKEN]);
