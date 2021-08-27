module.exports = {

    calculate : (grill_width , grill_height , grill_items) => {

        let area = grill_width * grill_height;
        let valid_grill_items = [];
        let in_valid_grill_items = [];

        grill_items.sort((a , b) => {
            let b_area = b.width * b.height;
            let a_area = a.width * a.height;

            return parseFloat(b_area) - parseFloat(a_area);
        })

        grill_items.map((grill_item) => {

            for(let i= 0 ; i < grill_item.count ; i++) {

                let grill_area = grill_item['width'] * grill_item['height'];
                
                if(grill_area <= area) {
                    valid_grill_items.push(grill_item)
                    area = area - grill_area;
                } else {
                    in_valid_grill_items.push(grill_item)
                }

            }

        });

        return {
            valid_grill_items,
            in_valid_grill_items,
            grill_width,
            grill_height
        }

    }

}