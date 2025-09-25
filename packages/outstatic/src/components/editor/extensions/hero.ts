import { Node, mergeAttributes } from '@tiptap/core'

export const Hero = Node.create({
  name: 'hero',
  group: 'block',
  content: 'inline*',
  defining: true,

  addAttributes() {
    return {
      background: {
        default: 'bg-gray-100'
      },
      align: {
        default: 'center'
      }
    }
  },

  parseHTML() {
    return [{ tag: 'hero-block' }]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'hero-block',
      mergeAttributes(HTMLAttributes, {
        class: `${HTMLAttributes.background} text-${HTMLAttributes.align} p-12 rounded-xl`
      }),
      0
    ]
  }
})
