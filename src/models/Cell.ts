import { nanoid } from 'nanoid';

import { Board } from './Board';
import { Colors } from './Colors';
import { Figure } from './figures/Figure';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board; // circle dependence (only for chess) - bad practice
  available: boolean; // Can are you move?
  id: string; // for react keys

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = false;
    this.id = nanoid();
  }
}
