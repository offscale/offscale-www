import { Component } from '@angular/core';

const url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  members: {title: string, subtitle: string, content: string, url: string}[] = [
    {
      title: 'Maxim',
      subtitle: 'Software engineer',
      content: 'has over 25 years of experience working as a Software Developer in a broad range of industries. ' +
        'His professional interests include Back-end systems and algorithm optimisation',
      url: '/assets/img/team/maxime.jpg'
    },
    {
      title: 'Samuel',
      subtitle: 'Software engineer & programme coordinator',
      content: 'is a PhD candidate and engineer, with a focus on distributed systems, ' +
        'compilers, artificial intelligence, natural language processing, biomedical engineering, and ERP.',
      url: '/assets/img/team/samuel.png'
    },
    {
      title: 'Rishab',
      subtitle: 'Software engineer',
      content: 'has experience developing a securitisation platform and digital asset exchange using Ethereum based blockchains. ' +
        'He is a Mechatronics Engineering graduate from the University of Sydney, who has developed real-time computer vision, graphics ' +
        'and robotics applications where performance is critical.',
      url: '/assets/img/team/rishab.png'
    },
    {
      title: 'Viktor',
      subtitle: 'Software engineer',
      content: 'Interested in software architecture, programming language theory, parallel programming, systems programming, ' +
        'Unix philosophy. Author of a number of side-projects. Participant in Google Summer of Code.',
      url: '/assets/img/team/victor.jpg'
    },
    {
      title: 'Agustin',
      subtitle: 'Software engineer',
      content: 'has over 10 years of experience developing software. He specialises in ' +
        'distributed applications and data engineering, using Scala, Rust, Go and Python and is a fan of compilers, virtual machines and ' +
        'emulating old cpus',
      url: '/assets/img/team/agustin.png'
    },
    {
      title: 'Ivan',
      subtitle: 'Software engineer',
      content: 'Engineering and DevOps enthusiast, winner of multiple hackathons, ' +
        'project management and soft skills expert, PLs: C++, Python, Go.\n' +
        'Romanov: Main interests are distributed systems and backend development. ' +
        'Has a strong background in algorithms and data structures. PLs: Java, C++, Python, Go, SQL.',
      url: '/assets/img/team/ivan.jpg'
    },
    {
      title: 'Dmitriy',
      subtitle: 'Software engineer',
      content: 'Strong mathematician, experienced programmer, chess CM. PLs: C, C++, Python, Android, Haskel, SQL.',
      url: url
    },
    {
      title: 'Carlos',
      subtitle: 'Software engineer',
      content: 'DevOps expert, written a number of tools in Go to facilitate the ' +
        'building, packaging and distribution of arbitrary Go packages.',
      url: '/assets/img/team/carlos.jpg'
    },
    {
      title: 'Ram',
      subtitle: 'Software engineer',
      content: 'has experience with Rust, game development and x264 encoding',
      url: url
    }
  ];
}
