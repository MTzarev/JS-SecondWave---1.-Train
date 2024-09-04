function train(info) {
    let final = info.shift().split(` `).map(Number);
    let maxCap = info.shift();
    for (let i = 0; i < info.length; i++) {
        let command = info[i];
        let addPassengers = command.split(` `);
        if (command.includes("Add")) {
            addPassengers = Number(addPassengers[1]);
            final.push(addPassengers);
        } else {
            addPassengers = Number(addPassengers[0]);
            for (let j = 0; j < final.length; j++) {
                if ((final[j] + addPassengers) <= maxCap) {
                    final[j] += addPassengers;
                    break;
                }
            }
        }
    }
    console.log(final.join(` `));

}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
