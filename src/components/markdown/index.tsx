import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { components } from './components';

import * as S from './styles';

type MarkdownProps = {
  source: MDXRemoteSerializeResult;
};

export const Markdown = ({ source }: MarkdownProps) => {
  return (
    <S.Container>
      <MDXRemote {...source} components={components} />
    </S.Container>
  );
};
