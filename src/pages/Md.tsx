import React from 'react'

/** Tiny markdown renderer: headings, paragraphs, lists, bold, links, hr. */
function inline(text: string): React.ReactNode[] {
    const out: React.ReactNode[] = []
    const re = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g
    let last = 0
    let m: RegExpExecArray | null
    let k = 0
    while ((m = re.exec(text))) {
        if (m.index > last) out.push(text.slice(last, m.index))
        const tok = m[0]
        if (tok.startsWith('**')) out.push(<strong key={k++} className="text-white">{tok.slice(2, -2)}</strong>)
        else {
            const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok)!
            const href = mm[2].replace('https://www.exodus.com', '')
            out.push(<a key={k++} href={href.startsWith('/') || href.startsWith('#') ? href : mm[2]} className="underline text-[#B19DFF]">{mm[1]}</a>)
        }
        last = m.index + tok.length
    }
    if (last < text.length) out.push(text.slice(last))
    return out
}

const SKIP = [/^Sub-topics/i, /^Links in this section/i, /^\(Condensed/i, /^Table of contents/i, /^\(Note/i, /^\(.*\)$/, /^Exodus: the world's leading/]

export function Md({ source }: { source: string }) {
    const lines = source.split('\n')
    const blocks: React.ReactNode[] = []
    let list: { ordered: boolean; items: string[] } | null = null
    let para: string[] = []
    let k = 0
    let skipList = false

    const flushPara = () => {
        if (!para.length) return
        const t = para.join(' ').trim()
        para = []
        if (!t || SKIP.some((r) => r.test(t))) return
        blocks.push(<p key={k++} className="text-base leading-[1.75] text-white/64">{inline(t)}</p>)
    }
    const flushList = () => {
        if (!list) return
        if (!skipList) {
            const Tag = list.ordered ? 'ol' : 'ul'
            blocks.push(
                <Tag key={k++} className={(list.ordered ? 'list-decimal' : 'list-disc') + ' flex flex-col gap-2 pl-6 text-base leading-[1.7] text-white/64'}>
                    {list.items.map((it, i) => <li key={i}>{inline(it)}</li>)}
                </Tag>,
            )
        }
        list = null
        skipList = false
    }

    for (const raw of lines) {
        const line = raw.trim()
        if (line.startsWith('<!--')) continue
        if (!line) { flushPara(); flushList(); continue }
        if (/^---+$/.test(line)) { flushPara(); flushList(); continue }
        const h = /^(#{1,6})\s+(.*)$/.exec(line)
        if (h) {
            flushPara(); flushList()
            const lvl = h[1].length
            const text = h[2]
            const cls = lvl <= 2 ? 'font-eudoxus text-[32px] font-bold md:text-[44px] text-white'
                : lvl === 3 ? 'font-eudoxus text-xl font-bold text-white/64'
                : lvl === 4 ? 'mt-6 font-eudoxus text-xl font-bold tracking-wide text-white md:text-2xl'
                : 'mt-2 font-eudoxus text-lg font-bold text-white'
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
            blocks.push(React.createElement(`h${Math.min(lvl, 6)}`, { key: k++, id, className: cls + ' scroll-mt-28' }, inline(text)))
            continue
        }
        const ul = /^[-*]\s+(.*)$/.exec(line)
        const ol = /^\d+\.\s+(.*)$/.exec(line)
        if (ul || ol) {
            flushPara()
            const ordered = !!ol
            const text = (ul || ol)![1]
            if (!list || list.ordered !== ordered) { flushList(); list = { ordered, items: [] } }
            // skip the table-of-contents anchor list
            if (/^\[[^\]]+\]\(#[^)]+\)$/.test(text)) skipList = true
            list.items.push(text)
            continue
        }
        flushList()
        para.push(line)
    }
    flushPara(); flushList()
    return <div className="flex flex-col gap-5">{blocks}</div>
}
