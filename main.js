


import {

import {
	Button,
	ButtonBehavior
} from 'buttons';

import { 

var foodCalorieIndex = { 
	"Plate of Spaghetti":600, 
	"Banana":105,
	"Pop Tart":200,
	"Big Mac":563,
	"Medium Fries":365,
	"Taco":189,
	"Slice of bread":79,
	"Chocolate Cake":350,
	"Plate of Pad Thai":899,
	"IHOP Chorizo Fiesta Omelette":199,
	"Harmless Coconut Water (1 bottle)":120,
	"Boba milk tea with grass jelly":316,
	"Cup of black coffee":5,
	"Grande Caramel Frappucino":420
	};

var userSelectedFood;
var numCaloriesWanted;
var currInput = 0;
var finalQuantity = 0;

let nameInputSkin = new Skin({ borders: { left: 2, right: 2, top: 2, bottom: 2 }, stroke: 'gray' });
                            currInput = data.name;


	left: 150, right: 40, top: 30,



let foodRadioStyle = new Style({ color: '#aaa', font: '10px',});

let MyRadioGroup = RadioGroup.template($ => ({
    style:foodRadioStyle,
        	trace(buttonName+"\n");
            userSelectedFood = buttonName;
            numCaloriesWanted = foodCalorieIndex[userSelectedFood];
            if (currInput != null) {
            	numCaloriesWanted = currInput * numCaloriesWanted;
            }
			amountText.string = numCaloriesWanted + " calories total";



/**slider screen*/

/**make scrollable*/
let scrollContainer = Container.template($ => ({
    Behavior: class extends Behavior {


/*button stuff*/
let addButtonTemplate = Button.template($ => ({
	top: 10, bottom: 10, left: 220, right: 65,
	contents: [
		Label( $, {left: 0, right: 0, height: 30, width: 20, string: ">>", skin: buttonSkin, style: buttonStyle})
	],
	Behavior: class extends ButtonBehavior {
		onTap(button) {
			trace("button tapped\n");
			application.remove(currentScreen);
		} 
	}
}));
let buttonSkin = new Skin({ fill: "#BF3100" });
let buttonStyle = new Style({color: 'white'});
let addButtonContainer = new Container({

/**adding first screen*/
let pickAndChoose = new Column({ 
    skin: new Skin({ fill: '#EC9F05' }),
    style: foodRadioStyle,
    	new quantityTemplate(),
        new addButtonTemplate({ textForLabel: "Click Me!" })

//do not delete!!



var amountText = new Text({
	left: 40, right: 40, bottom: 150,
var resultDisplay = new Column({
	contents: [
		amountText,
	]
});


//table goes here
let darkGraySkin = new Skin({ fill: "#202020" });

let contentToScrollVertically = new Column({ 
            contents: [
             })),

let scrollerExample = new MainContainer({ contentToScrollVertically });