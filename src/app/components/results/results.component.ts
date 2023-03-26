import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WordCloudService } from 'src/app/api/services/wordcloud.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  wordCounts: { word: string; count: number }[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly wordCloudService: WordCloudService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const id = params['id'];
      const wordCounts = await this.wordCloudService.getWordCounts(id);
      for (const word in wordCounts) {
        this.wordCounts.push({ word, count: wordCounts[word] });
      }
      this.wordCounts.sort((a, b) => a.count < b.count ? 1 : -1);
    });
  }
}
