class Bread {
    constructor(type, toastable, burnable){
        this.type = type;
        this.toastable = toastable;
        this.burnable = burnable;
    }
}

class Toaster extends Bread {
    constructor(type, toastable, burnable){
        super(type, toastable, burnable)
    }

    toast() {
        if (this.toastable){
            if (this.burnable == true){
                let burned = Math.floor(Math.random() * 2);
                if (burned == 0){
                    return 'toasted';
                } else {
                    return 'burned';
                }
            } else {
                return 'toasted';
            }
        } else {
            return 'rejected';
        }
    }
}

const sourDough = new Toaster('sour dough', true, true);
const wheat = new Toaster('wheat', true, true);
const rye = new Toaster('rye', true, false);
const white = new Toaster('white', false, false);
const englishMuffin = new Toaster('english muffin', false, false);

export { sourDough, wheat, rye, white, englishMuffin}