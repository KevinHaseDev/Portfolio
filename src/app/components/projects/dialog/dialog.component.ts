interface Technology {
  icon: string;
  name: string;
}

interface ProjectDialog {
  title: string;
  name: string;
  description: string;
  technologies: Technology[];
  footer: {
    previewImage: string;
  };
}

export class DialogComponent {
  projectDialog: ProjectDialog = {
    title: '',
    name: '',
    description: '',
    technologies: [],
    footer: {
      previewImage: ''
    }
  };
}
