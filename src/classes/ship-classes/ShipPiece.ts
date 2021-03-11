class ShipPiece {
    private id: number;
    private colour: string;
    private x: number;
    private y: number;
    private hitStatus: boolean;
    constructor(colour: string) {
        this.x = 0;
        this.y = 0;
        this.hitStatus = false;
        this.colour = colour;
        this.id = 0;
    }
    getId(): number {
        return this.id;
    }
    setId(id: number): void {
        this.id = id;
    }
    getX(): number {
        return this.x;
    }
    getColour(): string {
        return this.colour;
    }
    setColour(colour: string): void {
        this.colour = colour;
    }
    setX(xin: number): void {
        this.x = xin;
    }
    getY(): number {
        return this.y;
    }
    setY(yin: number): void {
        this.y = yin;
    }
    getHitStatus(): boolean {
        return this.hitStatus;
    }
    setHitStatus(status: boolean): void {
        this.hitStatus = status;
    }
}

export {ShipPiece};