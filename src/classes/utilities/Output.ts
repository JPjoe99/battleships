class Output {
    private mainBody: HTMLDivElement;
    constructor() {
        this.mainBody = document.querySelector("#main");
    }
    outputToDocument(item: HTMLDivElement): void {
        this.mainBody.appendChild(item);
    }
    outputSink(): void {
        alert("SINK");
    }
    outputMiss(): void {
        alert("MISS");
    }
    outputHit(): void {
        alert("HIT");
    }
    outputWin(): void {
        if (confirm("You won! Press OK to restart,")) {
            window.location.reload();
        }
    }
    outputWelcome(): void {
        alert("Welcome to Battleships! Aim: Sink the enemy's three ships")
    }
}

export {Output};