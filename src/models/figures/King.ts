import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureNames } from './Figure';

import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  // canMove(target: Cell): boolean {
  //   if (!super.canMove(target)) {
  //     return false;
  //   }
  //   const dxDiagonal = Math.abs(this.cell.x - target.x);
  //   const dyDiagonal = Math.abs(this.cell.y - target.y);
  //   const min = Math.min(this.cell.y, target.y);
  //   const max = Math.max(this.cell.y, target.y);
  //   for (let y = min + 1; y < max; y++) {
  //     if (!this.cell.board.getCell(this.cell.x, y).isEmpty()) {
  //       return false;
  //     }
  //   }
  //   return dxDiagonal === 1 && dyDiagonal === 1;
  // }
}
