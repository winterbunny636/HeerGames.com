var coins = 0;

function addToCoins(amount) {
    if (amount > 0) {
        coins += amount;
    };
};

function subtractFromCoins(amount) {
    if (amount <= 100) {
        coins -= amount;
    };
};

function main() {
    if (coins == 0) {
        coins = 0;
    };
};