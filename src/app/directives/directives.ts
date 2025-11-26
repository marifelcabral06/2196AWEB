import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrls: ['./directives.css']

})
export class Directives {
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  monthNameStatic: string = 'Mar';
  monthNameDynamic: string = 'Nov';



  cityList: string[] = ["Angeles","Bacolor","Tarlac","Mabalacat","San Fernando"];

 studentList: any[] = [
  { stud_no: 1, stud_name: 'D Esquivel', course: 'Web Development', isActive: false },
  { stud_no: 2, stud_name: 'D Dizon', course: 'Network Administration', isActive: false },
  { stud_no: 3, stud_name: 'F Alejandro', course: 'Systems Development', isActive: false },
  { stud_no: 4, stud_name: 'D David', course: 'CyberSecurity', isActive: false },
  { stud_no: 5, stud_name: 'C Quintana', course: 'Web Development', isActive: true }
];


  showNote() {
    this.isNoteVisible = true;
  }

  hideNote() {
    this.isNoteVisible = false;
  }

  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }
}
