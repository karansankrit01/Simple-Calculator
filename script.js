function AppendTodisplay(value) {
    const display = document.getElementById('displayBox');
    display.value += value;
}
function clearDisplay() {
    document.getElementById('displayBox').value = '';
}
function Perform() {
    const display = document.getElementById('displayBox');
    try {
        // Use eval safely for basic arithmetic
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => clearDisplay(), 1500);
    }
}