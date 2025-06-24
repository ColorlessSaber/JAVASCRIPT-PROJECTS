// Display wand information that the user selected
function display_wand_info(wand) {
    let wand_list = {
        "ivy wood wand": {
            "cost": 120,
            "maker": "Woodworks Inc",
            "material": "with Ivy Wood, harvested from a parished Dryad (with permission)"
        },
        "drago blood wand": {
            "cost": 89,
            "maker": "Vani Kai",
            "material": "with a Dragon Blood drop encased in ash wood"
        },
        "twilight tear wand": {
            "cost": 63,
            "maker": "The Twil Tribe",
            "material": "from a two year old sapling, given only Twilight tears"
        },
        "fairy wing wand": {
            "cost": 273,
            "maker": "Local Fairies",
            "material": "encasing a fairy wing inside secred wood, all done with permission and care"
        }
    }
    let wand_selection = wand.innerText;
 
    // Grab the necessary information and form the paragraph to display
    let wand_info = "The " + wand_selection + " is created by " + wand_list[wand_selection.toLowerCase()].maker +
    ". It is created by " + wand_list[wand_selection.toLowerCase()].material + ".<br>The cost of the wand is " + 
    wand_list[wand_selection.toLowerCase()].cost + " gold coins.";
    document.getElementById("wand-info").innerHTML = wand_info;
}