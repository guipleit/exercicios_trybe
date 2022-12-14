let rook = 'rook'

switch (rook) {
   case "king":
   console.log('King: move 1 square adjcent to the itself')
   break;

   case "rook":
    console.log('Rook: move any number of square horizontally or vertically')
    break;

    case "queen":
        console.log('Queen: move any number of square horizontally, vertically or diagonally')
        break;

        case "pawn":
            console.log(`Pawn: move 1 or 2 squares vertically if it is in the starting square or 1 square if it is not`)
            break;
            case "bishop":
                console.log('Bishop: move any number of squares diagonally')
                break;

                case "knight":
                    console;log('Knight: move two squares in any direction vertically followed by one square horizontally, or two squares in any direction horizontally followed by one square vertically')

}