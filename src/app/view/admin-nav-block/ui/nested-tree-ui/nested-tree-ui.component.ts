import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeNode} from '../../models/nested-tree-node';

@Component({
  selector: 'app-nested-tree-ui',
  templateUrl: './nested-tree-ui.component.html',
  styleUrls: ['./nested-tree-ui.component.scss']
})
export class NestedTreeUiComponent implements OnChanges {
  @Input() nodes: NestedTreeNode[] = [];
  treeControl = new NestedTreeControl<NestedTreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<NestedTreeNode>();
  @Input() set data(nodes: NestedTreeNode[]) {
    this.dataSource.data = nodes;
  }
  hasChild = (_: number, node: NestedTreeNode) => !!node.children && node.children.length > 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.nodes) {
      this.dataSource.data = this.nodes;
    }
  }
}
