import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import * as S from './styles';

type MarkdownProps = {
  source: MDXRemoteSerializeResult;
};

export const Markdown = ({ source }: MarkdownProps) => {
  return (
    <S.Container>
      <MDXRemote {...source} />
    </S.Container>
  );
};
