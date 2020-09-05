import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prova(): void {
    document.getElementById('carousl').scrollIntoView();
  }

  isLast(): boolean {
    const radioValue = $('input[name=\'slides\']:checked');
    return radioValue[0].id.split('-')[1] === '13';

  }
  isFirst(): boolean {
    const radioValue = $('input[name=\'slides\']:checked');
    return radioValue[0].id.split('-')[1] === '1';
  }
  goToLeft(): void {
    const radioValue = $('input[name=\'slides\']:checked');
    const numb = Number(radioValue[0].id.split('-')[1]);
    $('#' + radioValue[0].id).prop('checked', false);
    $('#slide-' + (numb - 1)).prop('checked', true);

  }
  goToRight(): void {
    const radioValue = $('input[name=\'slides\']:checked');
    const numb = Number(radioValue[0].id.split('-')[1]);
    $('#' + radioValue[0].id).prop('checked', false);
    $('#slide-' + (numb + 1)).prop('checked', true);
  }
}
