$(document).ready(function () {
  $(".button-option").click(function () {
    var position = $(this).data("position");
    var newPosition = position * 22 + 5; // Calculate the new position
    $(".button-slider").css("left", newPosition + "px");
    let numberButton = $(".non");
    let result=$(".result");
    let paragraph=$(".result p");
    let keyboard=$(".keyboard");
    let reset=$(".reset");
    let equal=$(".equal");
    let dele=$(".del");
    let calc=$(".header h5");
    let theme=$(".theme");
    let lbl=$(".lbl1");
    let buttonWrapper=$(".button-wrapper");
    let buttonSlider=$(".button-slider");
  

    

console.log(lbl);

    // Conditional logic based on the position
    if (newPosition === 5) {
      // When the button is in the left position
      console.log("Slider is in the left position.");
      $("body").css({
        "background": "hsl(222, 26%, 31%)"
      })

     result.css({
      "background":""
     })
     paragraph.css({
      "color":""
     })
     keyboard.css({
      "background":""
     })
     reset.css({
      "background":"",
      "border-bottom": ""
     })
     dele.css({
      "background":"",
      "border-bottom": ""
     })
     equal.css({
      "background":"",
      "border-bottom": ""
     })
     calc.css({
      "color":""
     })
     theme.css({
      "color":""
     })
     lbl.css({
      "color":""
     })
     buttonWrapper.css({
      "background":""
     })
     buttonSlider.css({
      "background":""
     })
     numberButton.css({
      "background":"",
      "border-bottom": ""
      ,"color":""

     })
    } else if (newPosition === 27) {
      // When the button is in the middle position
      console.log("Slider is in the middle position.");
      $("body").css({
        "background":"hsl(0, 0%, 90%)",
        "color":"black"
      })
     result.css({
      "background":"hsl(100, 100%, 100%)"
     })
     paragraph.css({
      "color":"black"
     })
     keyboard.css({
      "background":"hsl(0, 5%, 81%)"
     })
     reset.css({
      "background":"hsl(185, 42%, 37%)",
      "border-bottom": "4px solid hsl(185, 58%, 25%)"
     })
     dele.css({
      "background":"hsl(185, 42%, 37%)",
      "border-bottom": "4px solid hsl(185, 58%, 25%)"
     })
     equal.css({
      "background":"hsl(25, 98%, 40%)",
      "border-bottom": "4px solid hsl(25, 99%, 27%)"
     })
     calc.css({
      "color":"black"
     })
     theme.css({
      "color":"black"
     })
     lbl.css({
      "color":"black"
     })
     buttonWrapper.css({
      "background":"hsl(0, 5%, 81%)"
     })
     buttonSlider.css({
      "background":"hsl(25, 98%, 40%)"
     })
     numberButton.css({
      "background":"",
      "border-bottom": ""
      ,"color":""
     })
    } else if (newPosition === 49) {
      // When the button is in the right position
      console.log("Slider is in the right position.");
      $("body").css({
        "background": "hsl(268, 75%, 9%)"
      })

     result.css({
      "background":"hsl(268, 71%, 12%)"
     })
     paragraph.css({
      "color":" hsl(52, 100%, 62%)"
     })
     keyboard.css({
      "background":"hsl(268, 71%, 12%)"
     })
     reset.css({
      "background":"hsl(281, 89%, 26%)",
      "border-bottom": "4px solid hsl(285, 91%, 52%)"
     })
     dele.css({
      "background":"hsl(281, 89%, 26%)",
      "border-bottom": "4px solid hsl(285, 91%, 52%)"
     })
     equal.css({
      "background":"hsl(176, 100%, 44%)",
      "border-bottom": "4px solid hsl(177, 92%, 70%)"
     })
     calc.css({
      "color":" hsl(52, 100%, 62%)"
     })
     theme.css({
      "color":" hsl(52, 100%, 62%)"
     })
     lbl.css({
      "color":" hsl(52, 100%, 62%)"
     })
     buttonWrapper.css({
      "background":"hsl(268, 71%, 12%)"
     })
     buttonSlider.css({
      "background":"hsl(176, 100%, 44%)"
     })
     numberButton.css({
      "background":"hsl(268, 47%, 21%)",
      "border-bottom": "4px solid hsl(285, 91%, 52%)"
      ,"color":"hsl(52, 100%, 62%)"
     })
    
    }

  
  });
  
  let numberButton = $(".number");
  let result = $(".result p");
  console.log(result);
  let pressing = function () {
    $(this).css({
      "transform": "translateY(4px)",
    })
    setTimeout(() => {
      $(this).css({
        "transform": "translateY(0)"
      });
    }, 100);
  }

  // Function to evaluate the expression and handle operator priority
  function evaluateExpression(expression) {
    try {
      // Use eval to calculate the result; ensure safe input handling
      return eval(expression.replace(/[^0-9+\-*/.]/g, '')); // Remove any invalid characters
    } catch {
      return "Error"; // Return error if eval fails
    }
  }

  $(".number").click(function () {
    let currentText = result.text();
    let newNumber = $(this).text();
    
    // Do nothing if equal, delete, or reset button is pressed
    if ($(this).hasClass("equal") || $(this).hasClass("del") || $(this).hasClass("reset")) {
      return;
    }

    // Prevent consecutive operators
    if (['+', '-', '*', '/'].includes(newNumber) && ['+', '-', '*', '/'].includes(currentText.slice(-1))) {
      return; // Do nothing if the last character is also an operator
    }
    
    // If the current text is "0", replace it with the new number; otherwise, append the new number
    if (currentText === "0") {
      result.text(newNumber);
    } else {
      // Append newNumber only if it's not an operator; otherwise, ensure proper expression building
      result.text(currentText + newNumber);
    }
  });

  let resetBtn = $(".reset");
  let reset = function () {
    result.text(0); // Reset the display to "0"
  }
  
  let deleteBtn = $(".del");
  let delet = function () {
    let currentText = result.text();
    
    // Remove the last character from the current text
    let newText = currentText.slice(0, -1);
    
    // If the new text is empty, reset it to "0"
    if (newText === "") {
      newText = "0";
    }

    // Update the result display
    result.text(newText);
  }

  // Event handler for the equal button to evaluate the expression
  $(".equal").click(function () {
    let currentText = result.text();
    let evaluatedResult = evaluateExpression(currentText); // Evaluate the current expression
    result.text(evaluatedResult); // Display the evaluated result
  });

  resetBtn.click(reset); // Bind reset button click
  deleteBtn.click(delet); // Bind delete button click
  numberButton.click(pressing); // Bind pressing effect for number buttons
});
