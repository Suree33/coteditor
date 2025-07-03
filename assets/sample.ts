interface Coffee {
  name: string;
  price: number;
  level: "low" | "medium" | "high" | "dangerous";
}

class CoffeeShop {
  private menu: Coffee[] = [
    { name: "Sleepy Latte", price: 4.5, level: "low" },
    { name: "Deadline Destroyer", price: 6.0, level: "dangerous" },
    { name: "Monday Motivation", price: 5.25, level: "high" },
  ];

  // Order coffee based on desperation level
  orderCoffee(situation: string): Coffee {
    if (situation.includes("meeting")) {
      return this.menu.find((coffee) => coffee.level === "dangerous")!;
    }
    return this.menu[Math.floor(Math.random() * this.menu.length)];
  }

  // Calculate wallet damage
  calculateDamage(cupsPerDay: number): number {
    const avgPrice =
      this.menu.reduce((sum, coffee) => sum + coffee.price, 0) / 3;
    return avgPrice * cupsPerDay * 365;
  }
}

// Usage: Surviving Monday
const shop = new CoffeeShop();
const coffee = shop.orderCoffee("important meeting");
const damage = shop.calculateDamage(5);

console.log(`Today's choice: ${coffee.name}`);
console.log(`Annual damage: $${damage.toFixed(2)}`);
console.log(`Status: You're addicted!`);
