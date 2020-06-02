var productInfo = {
    	"4412": {
    		"orange_commercial": {
          "4mm": ["6X4", "7X3", "7X4", "8X4"],
          "6mm": ["6X4", "7X3", "7X4", "8X4"],
          "8mm": ["6X4", "7X3", "7X4", "8X4"],
          "12mm": ["6X4", "7X3", "7X4", "8X4"],
          "15mm": ["6X4", "7X3", "7X4", "8X4"],
          "18mm": ["6X4", "7X3", "7X4", "8X4"],
    		},
    		"orange_waterproof": {
          "6mm": ["7X4", "8X4"],
          "8mm": ["7X4", "8X4"],
          "12mm": ["7X4", "8X4"],
          "18mm": ["7X4", "8X4"]
    		},
        "block_board": {
          "18mm": ["8X4"]
        },
        "narotham_commercial": {
          "6mm": ["7X4", "8X4"],
          "8mm": ["7X4", "8X4"]
        },
        "narotham_waterproof": {
          "6mm": ["7X4", "8X4"],
          "18mm": ["7X4", "8X4"]
        },
        "woodply": {
          "6mm": ["7X4", "8X4"],
          "12mm": ["7X4", "8X4"]
        },
        "raj_waterproof": {
          "6mm": ["6X3", "7X4"],
          "12mm": ["6X3", "7X4"],
          "15mm": ["6X3", "7X4"]
        }
    	},
    	"3506": {
    		"Adhesives - Fevicol": {
    			"SH": ["1kg", "5kg", "10kg"],
    			"SR" : ["1Ltr", "2Ltr", "5Ltr"]
    		}
    	}
    }

    window.onload = function () {
    
    	//Get html elements
    	var hsn = document.getElementById("hsn");
    	var brand = document.getElementById("brand");
    	var thickness = document.getElementById("thickness");
    	var size = document.getElementById("size");
    
    	//Load countries
    	for (var code in productInfo) {
    		hsn.options[hsn.options.length] = new Option(code, code);
    	}
    
    	//County Changed
    	hsn.onchange = function () {
    
    		 brand.length = 1; // remove all options bar first
    		 thickness.length = 1; // remove all options bar first
    		 size.length = 1; // remove all options bar first
    
    		 if (this.selectedIndex < 1)
    			 return; // done
    
    		 for (var brand_name in productInfo[this.value]) {
    			 brand.options[brand.options.length] = new Option(brand_name, brand_name);
    		 }
    	}
    
    	//brand_name Changed
    	brand.onchange = function () {
    
    		 thickness.length = 1; // remove all options bar first
    		 size.length = 1; // remove all options bar first
    
    		 if (this.selectedIndex < 1)
    			 return; // done
    
    		 for (var p_thickness in productInfo[hsn.value][this.value]) {
    			 thickness.options[thickness.options.length] = new Option(p_thickness, p_thickness);
    		 }
    	}
    
    	//p_thickness Changed
    	thickness.onchange = function () {
    		size.length = 1; 
    // remove all options bar first
    
    		if (this.selectedIndex < 1)
    			return; // done
    
    		var p_size = productInfo[hsn.value][brand.value][this.value];
    		for (var i = 0; i < p_size.length; i++) {
    			size.options[size.options.length] = new Option(p_size[i], p_size[i]);
    		}
    	}
    }