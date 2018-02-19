import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../product.model';

/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  /**
   * @Input productList - the Product[] passed to us
   */
  @Input() productList: Product;
  /**
   * @Output productSelected - outputs the current
   *         Product whenever a new Product is selected
   * @type {EventEmitter<Product>}
   */
  @Output() productSelected = new EventEmitter<Product>();

  /**
   * @property currentProduct - local state containing
   *           the currently selected `Product`
   */
  private currentProduct: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
