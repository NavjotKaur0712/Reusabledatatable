import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Posts } from '../../models/Posts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-datatable-child',
  templateUrl: './datatable-child.component.html',
  styleUrls: ['./datatable-child.component.css']
})
export class DatatableChildComponent {
   @Input() posts: any;
   @Input() dataSource;
   @Input() displayedColumns: string[]=[];
 
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
  
   constructor() {
   }

  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort= this.sort;

  }
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
}

filter(filterValue: string){
 console.log( filterValue);
 this.dataSource.filter = filterValue.trim().toLowerCase();
 console.log("111",this.dataSource.filteredData);
}

  ngOnInit() {
    this.dataSource=new MatTableDataSource(this.posts);
    // this.dataSource.filterPredicate= function(posts, filter: number): boolean{
    //   return posts.id.toLowerCase().includes(filter)
    }
  }
 

