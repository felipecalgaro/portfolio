import { BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";

interface ReadmeDialogProps {
  readme: string | null;
}

export function ReadmeDialog({ readme }: ReadmeDialogProps) {
  if (!readme) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='sm:ml-16 ml-8 flex justify-center items-center gap-4'>
          <BookOpen size={24} strokeWidth={1.5} />
          <p className='cursor-pointer hover:underline text-black/70'>Click to preview README</p>
        </div>
      </DialogTrigger>
      <DialogContent className='max-h-[80vh] overflow-y-auto max-w-5xl w-[80vw]'>
        <DialogHeader>
          <DialogTitle>README.md</DialogTitle>
          <DialogDescription asChild>
            <div className="prose max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ ...props }) => (
                    <h1 className='text-3xl mb-12 mt-8 font-bold text-black' {...props} />
                  ),
                  h2: ({ ...props }) => (
                    <h2 className='text-2xl mt-8 mb-4 text-black' {...props} />
                  ),
                  h3: ({ ...props }) => (
                    <h3 className='text-lg mt-8 mb-4 text-black' {...props} />
                  ),
                  h4: ({ ...props }) => (
                    <h4 className='my-3 text-black inline' {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className='pointer-events-none'
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  code({ node, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                      <SyntaxHighlighter
                        language={match[1]}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  },
                  li: ({ ...props }) => (
                    <li className='my-2 text-black ml-4 list-inside list-disc' {...props} />
                  ),
                  p: ({ ...props }) => (
                    <p className='my-4 text-black inline' {...props} />
                  ),
                  img: ({ ...props }) => (
                    <img className='my-6' {...props} />
                  )
                }}
              >
                {readme}
              </ReactMarkdown>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}