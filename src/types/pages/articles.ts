export interface ArticleBasicEdit {
  localeId: number;
  siteSectionIds?: number[];
  title: string;
  content: string;
  headlineImgFile?: Blob;
  headlineImageText?: string;
  playerIds?: number[];
  timeSpent: number;
  quickpoll?: {
    question: string;
    options: [string, string];
  };
}

export interface ArticleCompleteEdit extends ArticleBasicEdit {}

export interface ArticleFormValues
  extends Omit<ArticleCompleteEdit, 'authors' | 'metadata'> {
  id?: string | number;
  headlineImgPreview?: string;
  metadata?: {
    id?: number;
    content?: string;
  }[];
}
