import {Injectable} from '@angular/core';


@Injectable()
export class DrinkDataProvider {

  beer: any;
  brandy: any;
  vodka: any;
  whiskey: any;
  wine: any;

  drink_data: any;

  constructor() {
    console.log('Hello DrinkDataProvider Provider');
  }

  displayDrinks() {

    console.log("In Display Drinks");

    this.beer = [
      {
        name: 'Budwiser',
        cost: '12.25',
        image: 'https://cdn0.woolworths.media/content/wowproductimages/large/005724.jpg',
        origin: '',
        ml_left: '750',
        description: '',
        purchased: 'yes',
        type: ''
      },
      {
        name: 'Corona',
        cost: '14.50',
        image: 'https://drindrink.com/wp-content/uploads/2017/09/408-CORONA-EXTRA-1.jpg',
        origin: '',
        ml_left: '750',
        description: '',
        purchased: 'yes',
        type: ''
      },
      {
        name: 'Bud lite',
        cost: '12.50',
        image: 'https://www.pikfly.com/images/products/164/39922.jpg',
        origin: '',
        ml_left: '750',
        description: '',
        purchased: 'no',
        type: ''
      },
      {
        name: 'Modelo',
        cost: '9.99',
        image: 'https://www.pikfly.com/images/products/141/21221.jpg',
        origin: '',
        ml_left: '750',
        description: '',
        purchased: 'no',
        type: ''
      },
      {
        name: 'Stella',
        cost: '14.50',
        image: 'https://i.pinimg.com/originals/04/83/eb/0483ebd1210715262edcb11c8fb0a5a3.jpg',
        origin: '',
        ml_left: '750',
        description: '',
        purchased: 'no',
        type: ''
      }
      /*End of beer*/

    ];


    this.brandy = [
      {
        name: 'BUTCHERTOWN',
        cost: '50.99',
        image: 'https://static.vinepair.com/wp-content/uploads/2016/01/Butchertown2.jpg',//http://www.freepngimg.com/download/bottle/4-brandy-bottle-png-image.png',
        ml_left: '750',
        description: 'Cooper & Kings has a pretty solid lineup, including an aged American brandy, an unaged “immature” brandy, and this power-packed bottle. Copper-pot distilled and aged in both bourbon and new American oak barrels, it’s got a whiskey quality to it overlaid by hints of dark fruit and subtly spicy, drying oak on the finish.',
        purchased: 'yes',
        type: 'brandy'
      },
      {
        name: 'CEDAR RIDGE APPLE',
        cost: '22.99',
        image: 'https://static.vinepair.com/wp-content/uploads/2016/01/Cedar-Ridge2.jpg',//http://www.freepngimg.com/download/bottle/2-wine-bottle-png-image.png',
        ml_left: '750',
        description: 'Made at Iowa’s first micro-distillery, where they also produce whiskey, rum, and gin, this is a classically warm, fruity apple brandy. Fermented and distilled twice (in a European-designed pot still, retaining more funky apple character) aged for three years in American and finished in French Limousin Oak casks, a balance of round fleshy apple sweetness balanced by spicy, drying oak, vanilla, and a 40% ABV warmth.',
        purchased: 'yes',
        type: 'brandy'
      },
      {
        name: 'CLEAR CREEK PEAR',
        cost: '24.99',
        image: 'https://static.vinepair.com/wp-content/uploads/2016/01/Clear-Creek-Pear2.jpg',
        ml_left: '750',
        description: 'A well-made pear brandy is a thing of beauty—capturing all the floral, nectary essence of a ripe pear. And Clear Creek knows what they’re doing—they’ve been at it in the Pacific Northwest for 30 years—which is no doubt why their pear eau de vie is so well received and reviewed. Made with locally grown Bartlett pears and distilled in German-made pot stills, there’s plenty of lush body in a still pure, green fruit expression.',
        purchased: 'no',
        type: 'brandy'
      },
      {
        name: 'KORBEL',
        cost: '44.99',
        image: 'https://static.vinepair.com/wp-content/uploads/2016/01/Korbel2.jpg',
        ml_left: '750',
        description: 'Unlike a lot of the other brandies on our list, this Korbel entrant is made using column stills—like feeding a steam engine, you never have to stop and clean them, though in theory you lose some of the complexity that a pot still retains.',
        purchased: 'no',
        type: 'brandy'
      },
      {
        name: 'ST. GEORGE',
        cost: '20.99',
        image: 'https://static.vinepair.com/wp-content/uploads/2016/01/St-George-2.jpg',
        origin: '',
        ml_left: '750',
        description: 'An un-aged raspberry eau de vie that gushes with a kind of just-picked freshness. Think round, fat, ripe California raspberries flesh out the palate, with drying notes of bramble and some overlaying florals keeping the juice complex. ',
        purchased: 'no',
        type: 'brandy'
      }
      /*End of brandy*/
    ];

    this.vodka = [
      {
        name: 'ABSOLUT Blue',
        cost: '20',
        image: 'https://d256619kyxncpv.cloudfront.net/gui/img/2017/11/02/14/2017110214_absolut_blue_vodka_original.png',
        ml_left: '750',
        description: 'Absolut Vodka is a classic tasting vodka distilled from winter wheat. The recipe is over 30 years old and the bottle design is based on an 18th century medicine flask.',
        purchased: 'yes',
        type: 'vodka'
      },
      {
        name: 'CHASE',
        cost: '33',
        image: 'https://d256619kyxncpv.cloudfront.net/gui/img/2015/10/30/22/2015103022_chase_english_oak_smoked_vodka_2_original.png',
        ml_left: '750',
        description: 'Williams Chase is just a simple English farmer. When he struggled to make his potato-farming pay, he started transforming his small-farm produced spuds into premium English-style chips. Turns out, selling things made from potatoes was better business than selling the potatoes themselves. Then Williams got ahold of some real potato vodka for the first time. The smooth, rich flavor of that particular spud-beverage naturally made him consider his home-grown tubers. ',
        purchased: 'no',
        type: 'vodka'
      },
      {
        name: 'SMIRNOFF RED',
        cost: '13',
        image: 'https://d256619kyxncpv.cloudfront.net/gui/img/2017/11/02/9/201711029_smirnoff_red_original.png',
        ml_left: '750',
        description: 'Smirnoff Red is triple distilled and ten times filtered for purity. This is the world\'s best selling vodka.',
        purchased: 'no',
        type: 'vodka'
      },
      {
        name: 'VODKA DSP CA 162',
        cost: '41.99',
        image: 'https://d256619kyxncpv.cloudfront.net/gui/img/2017/09/07/12/2017090712_dsp_vodka_staight_original.png',
        ml_left: '750',
        description: 'DSP Vodka Straight may indeed be “straight,” but it is also very complex. The spirit base is a combination of lightly sweet white wines — Riesling and Viognier — and wheat. It is double-distilled, first in an antique Cognac still and then in a Holstein pot still. The combination develops a perfect texture that lingers richly on the palate.',
        purchased: 'yes',
        type: 'vodka'
      },
      {
        name: 'JEAN MARC XO Vodka',
        cost: '59.99',
        image: 'https://d256619kyxncpv.cloudfront.net/gui/img/2017/01/23/13/2017012313_jean_marc_xo_vodka_original.png',
        ml_left: '750',
        description: 'There is quite a lot that makes Jean-Marc XO Vodka special. It starts with a special blend of four local wheat varieties. Importantly, they take the time to separate the chaff from the grain to reduce bitterness (a step that most producers skip). It is mixed with natural limestone-filter spring water and distilled nine times — 9 times! — in small copper alembic stills and micro-oxygenated using the Bordeaux Technique and passed through Limousin oak charcoal.',
        purchased: 'no',
        type: 'vodka'
      }
      /*End of vodka*/
    ];

    this.whiskey = [
      {
        name: 'Elijah Craig',
        cost: '60',
        image: 'http://s3.amazonaws.com/mscwordpresscontent/wa/wp-content/uploads/2017/10/Elijah-Craig-Barrel-Proof1.png',
        ml_left: '750',
        description: 'As bourbon matures in new charred oak barrels over time, it approaches a perilous point when the oak dominates the flavor. To sip Elijah Craig at 12 years of age—at full barrel proof, without dilution or filtering—is to taste bourbon at its apex, so dangerously close to going over the crest of the hill, yet delivering a massive mouthful of incredibly robust flavors that drape leathery oak over a gooey caramel core, sprinkled with baking spice, while candied nuts and tobacco leaf notes appear on a drying finish dusted with cocoa.',
        purchased: 'yes',
        type: 'whiskey'
      },
      {
        name: 'Glenmorangie Astar',
        cost: '100',
        image: 'http://s3.amazonaws.com/mscwordpresscontent/wa/wp-content/uploads/2017/10/Glenmorangie-Astar1.png',
        ml_left: '750',
        description: 'Astar is matured in custom toasted casks made from slow-growing trees on north-facing slopes in the Ozark Mountains of Missouri. The barrels harbor bourbon for four years before heading to Glenmorangie. ',
        purchased: 'no',
        type: 'whiskey'
      },
      {
        name: 'Wild Turkey Master’s Keep Decades',
        cost: '150',
        image: 'http://s3.amazonaws.com/mscwordpresscontent/wa/wp-content/uploads/2017/10/Wild-Turkey-Decades1.png',
        ml_left: '750',
        description: 'Wild Turkey often exhibits a delightful earthiness, and when earth meets sweet in whiskey, it’s a beautiful thing. Wild Turkey Master’s Keep Decades achieves a rich texture where deep-tilled soil, fresh-cut grass, and mushrooms meet leather and dark chocolate, followed by dill, oregano, and oak. Caramel and vanilla explode over a heavy dose of cinnamon.',
        purchased: 'no',
        type: 'whiskey'
      },
      {
        name: 'Lagavulin 12 year old',
        cost: '130',
        image: 'http://s3.amazonaws.com/mscwordpresscontent/wa/wp-content/uploads/2017/10/Lagavulin-121.png',
        ml_left: '750',
        description: 'Conventional wisdom suggests that Lagavulin is at its peak at 16 years of age. However, this superlative 12 year old confirms why many consumers like their Lagavulin younger. This is Lagavulin at its very best: bold, yet complex and satisfying; full of character, with smoky, savory, maritime, sweet vanilla, and fruit notes all merging into a balanced and eminently drinkable whole.',
        purchased: 'yes',
        type: 'whiskey'
      },
      {
        name: 'Rampur Select',
        cost: '65',
        image: 'http://s3.amazonaws.com/mscwordpresscontent/wa/wp-content/uploads/2017/10/Rampur-Select1.png',
        ml_left: '750',
        description: 'Indian single malt distillers like Amrut and Paul John turn out first-rate whiskies that measure up to the most venerable names in scotch. Rampur, a single malt from Radico Khaitan Distillery in the foothills of the Himalayas, is the newest ambassador for this blossoming whisky nation.',
        purchased: 'no',
        type: 'whiskey'
      },
      //End of Whiskey
    ];


    this.wine = [
      {
        name: 'SAINT-JOSEPH',
        cost: '75',
        image: 'https://static.vinepair.com/wp-content/uploads/2017/11/02-Pierre-Gonon.jpg',
        ml_left: '750',
        description: 'Because Saint-Joseph is one of the largest northern Rhône crus, it’s tempting to assume that its wines are always approachable, entry-level Syrahs. Saint-Joseph, however, can be just as dramatic, complex, and expressive as nearby appellations like Côte-Rôtie and Cornas. Sniffing this Saint-Joseph is like inhaling a breath in fresh air.',
        purchased: 'yes',
        type: 'wine'
      },
      {
        name: 'CAIN FIVE',
        cost: '125',
        image: 'https://static.vinepair.com/wp-content/uploads/2017/11/04-Cain-Vineyard.jpg',
        ml_left: '750',
        description: 'The iconic Cain Five is a blend of five classic Bordeaux varieties that absolutely sing of their inherent varietal characteristics and place of origin, all at the same time. Winemaker Chris Howell’s attention to detail is evident in the wine’s complex flavor profile: restrained plum, cassis, and blackberry fruit, savory spice, stony minerality, and an incredibly long finish.',
        purchased: 'no',
        type: 'wine'
      },
      {
        name: 'PERRIER-JOUET',
        cost: '350',
        image: 'https://static.vinepair.com/wp-content/uploads/2017/11/15-Perrier-Joue-1.jpg',
        ml_left: '750',
        description: 'Yes, this bottle is very expensive — but if you’re in the mood to splurge, it’s totally worth it. Entirely comprised of Chardonnay, it’s beautifully perfumed and luscious, yet searing in acidity. Envision Grand Cru Chablis with bubbles.',
        purchased: 'no',
        type: 'wine'
      },
      {
        name: 'ANCIEN PINOT NOIR',
        cost: '70',
        image: 'https://static.vinepair.com/wp-content/uploads/2017/11/47-Ancien-Haynes.jpg',
        ml_left: '750',
        description: 'Exotic spices and flowers, including sandalwood, jasmine, sage, and coriander, combine with tart red fruit on top of this velvety, mouth-filling Napa Valley Pinot Noir.',
        purchased: 'no',
        type: 'wine'
      },
      {
        name: ' DYER',
        cost: '80',
        image: 'https://static.vinepair.com/wp-content/uploads/2017/11/31-Dyer-Vineyard.jpg',
        ml_left: '750',
        description: 'Yes, it’s a splurge. But this bottle proves that Napa still makes some of the world’s best Cabs. It’s rich with intense black fruit plus cedar, jasmine, and gravelly earth.',
        purchased: 'yes',
        type: 'wine'
      },
    ];

  }

}
