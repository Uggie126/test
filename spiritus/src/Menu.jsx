import React, {useState} from "react";
import "./Menu.css"

const Menu = () => {
    const [activeSection, setActiveSection] = useState("COCKTAILS");
    const [subSection, setSubSection] = useState("CHAMPAGNE");
    const [otherDrinksSubsection, setOtherDrinksSubsection] = useState("NON-ALCO");
  
    // Menu data
    const menuItems = {
      COCKTAILS: [
        { name: "Margarita", price: "10" },
        { name: "Paloma", price: "9,5" },
        { name: "Dr. Veryga", price: "9" },
        { name: "Tequila Sunrise", price: "9"},
        { name: "Mezcal Mule", price: "10"},
        { name: "Mezcal Negroni", price: "10"},
        { name: "Gin & Tonic", price: "9,5"},
        { name: "Kiyv Mule", price: "9"},
        { name: "Negroni", price: "10"},
        { name: "Cuba Libre", price: "9"},
        { name: "Whiskey Sour", price: "9"},
        { name: "Espresso Martini", price: "9,5"},
        { name: "Dead Russian", price: "9"},
        { name: "Spritz", price: "10"},
        { name: "Caipirinha", price: "9"},
        { name: "Dark & Stormy", price: "9"},
        //{ name: "", price: ""}
      ],
      FOOD: [
        { name: "Pulled Duck Sandwich", price: "8" },
        { name: "Camembert Sandwich", price: "8" },
        { name: "Nachos", price: "8" },
        { name: "Meat & Cheese Platter", price: "18"},
        { name: "Cured Pork", price: "8,5"},
        { name: "Olives", price: "4,5"}
      ],
      WINE: {
        "CHAMPAGNE": [
          { name: "Louis Roederer Brut Collection 375ml", price: "62" },
          { name: "Louis Barthelemy Amethyste Brut", price: "96" },
          { name: "Diebolt Vallois Brut Rose", price: "110" },
          { name: "Lois Roederer Brut", price: "128" },
          { name: "Veuve Cliquot Brut Yellow Label", price: "105" },
          { name: "Jacquesson Extra Brut Cuvee N745", price: "152" },
          { name: "Pol Roger Brut Vintage", price: "176" },
          { name: "Lois Roederer Cristal Brut", price: "350" }
      ],
        "BUBBLES": [
          { name: "Rosmas Cava Brut Nature", price: "6,5 | 30"},
          { name: "Follador Vino Spumante Extra Dry Prosseco Treviso DOC", price: "6,5 | 30" },
          { name: "Meinklang Rose PetNat Brut", price: "36" },
          { name: "Agusti Torello Mata Brut Reserva Cava Brut DO", price: "49" },
          { name: "Mascaro Reserva Cava Brut", price: "42" },
          { name: "Antech Cuvee Expression Cremant de Limoux Brut", price: "37" }
        ],
        "WHITE": [
          { name: "Anselmann Riesling Trocken 1000ml", price: "6,5 | 34"},
          { name: "Pago Ayles Unexpected Chardonnay", price: "6,5 | 30" },
          { name: "Rudi Ruttger Sauvignon Blanc", price: "32" },
          { name: "Kris Pinot Grigio Delle Venezie DOP", price: "32" },
          { name: "Domaine Servin Chablis AOC", price: "58" },
          { name: "Rudi Ruttger Gewurztraminer Spaltese", price: "28" },

      ],
        "RED": [
          { name: "San Gregorio El Vergal Tempranillo", price: "6,5 | 30"},
          { name: "Rudi Ruttger Pinot Noir", price: "6,5 | 30" },
          { name: "Susana Balbo Crios Malbec Mendoza", price: "36" },
          { name: "Leone de Castris Villa Santera Primitivo di Manduria DOC", price: "43" },
          { name: "Salomon Estate Norwood Shiraz Cabernet South Australia", price: "45" },
          { name: "Foncalieu Versant Pinot Noir Pays DOC IGP", price: "35" }
        ],
        "ROSE": [
          { name: "M. Chapoutier Marius Rose Pays DOC IGP", price: "28" }
        ]
      },

      "OTHER DRINKS": {
        "NON-ALCO": [
        { name: "Mango Margarita", price: "8,5" },
        { name: "Passionfruit Margarita", price: "8,5" },
        { name: "Gin & Tonic", price: "8,5" },
        { name: "Gin Sour", price: "8,5" },
        { name: "Tequila Soda", price: "8,5" },
        { name: "Non Alcoholic Beers", price: "3,5 - 5,5" }
      ],
        "SOFT DRINKS": [
          { name: "Pakruojo Rhubarb and Raspberry", price: "5"},
          { name: "San Pellegrino Red Orange", price: "3,5" },
          { name: "San Pellegrino Ginger Beer", price: "3,5" },
          { name: "Pepsi | Pepsi Max", price: "3" },
          { name: "Spritz Style Kombucha", price: "7" },
          { name: "Red Bull", price: "4,5" },
          { name: "Sparkling Water", price: "2,5" },
          { name: "Fever Tree Indian Tonic", price: "3" }
        ],
        "HOT DRINKS": [
          { name: "Spiritus Grog", price: "9"},
          { name: "Hot Toddy", price: "9" },
          { name: "Coffee", price: "3" },
          { name: "Tea", price: "3" }
        ]
      },
    };
  
    return (
      <div className="menu-section">
        {/* Navigation Bar */}
        <div className="menu-nav">
          {Object.keys(menuItems).map((section) => (
            <button
              key={section}
              className={activeSection === section ? "active" : ""}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </div>
        
        {activeSection === "WINE" && (
          <div className="menu-nav">
            {Object.keys(menuItems["WINE"]).map((sub) => (
              <button
                key={sub}
                className={subSection === sub ? "active" : ""}
                onClick={() => setSubSection(sub)}
                >{sub}
                </button>
            ))}
            </div>
        )}

        {activeSection === "OTHER DRINKS" && (
          <div className="menu-nav">
            {Object.keys(menuItems["OTHER DRINKS"]).map((sub) => (
              <button
                key={sub}
                className={otherDrinksSubsection === sub ? "active" : ""}
                onClick={() => setOtherDrinksSubsection(sub)}
                >
                {sub}
                </button>
            ))}
            </div>
        )}

        {/* Content Display h2 activeSection*/}
        <div className="menu-content">
          <ul>
            {activeSection === "WINE"
            ? menuItems["WINE"][subSection].map((item, index) => (
              <li key={index} className="menu-item">
                <span className="wine-span">{item.name}</span> <span className="price">{item.price}</span>
              </li>
            ))
            : activeSection === "OTHER DRINKS"
            ? menuItems["OTHER DRINKS"][otherDrinksSubsection].map((item,index) => (
            <li key={index} className="menu-item">
              <span>{item.name}</span> <span className="price">{item.price}</span>
            </li>
            ))
            : menuItems[activeSection].map((item, index) => (
              <li key={index} className="menu-item">
                <span>{item.name}</span> <span className="price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Menu;