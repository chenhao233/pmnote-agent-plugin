# PMNote

PMNote helps game project managers find and use public PMNote articles, podcasts and guides when planning releases, managing delivery risks and collaboration, preparing for interviews, and selecting AI tools.

## Try it

```text
查找 PMNote 关于游戏项目版本排期的文章，整理常见风险并附上来源。
```

The expected result is a grounded answer with links to the relevant public sources, distinguishing sourced claims from advice.

## Requirements

A compatible agent is required. Python 3 and internet access are needed for the optional public-content reader. No account, API key or paid service is required by the Skill itself. The public resources are predominantly in Chinese.

## Data and network

The Skill directs the agent to read public resources at https://pmnote.ai and linked public sources such as Xiaoyuzhou, Bilibili and Zhihu. For public interview search, the reader obtains the anonymous public connection from pmnote.ai and sends the search query to the website’s Supabase endpoint. Normal web requests expose the requested URL and network metadata to the destination. It does not require private credentials or include telemetry. External linked works retain their own rights; the MIT license covers this Skill package.

## Cursor

Install from the Cursor Marketplace once approved, or add this repository as a plugin source. Ask the agent a question about game project management and it can use the bundled `pmnote` skill.

## Privacy and support

[PMNote privacy policy](https://pmnote.ai/privacy/) · [Support and contact](https://pmnote.ai/support/)

## DeepSeek Harness

Install the DSH bundle from GitHub into a profile (DSH 0.2.2-rc.1 or compatible 0.2.x):

```sh
dsh plugin --profile default add github:chenhao233/pmnote-agent-plugin
```

The bundle registers the `pmnote` skill and includes its references and optional reader. It needs no install-time build. To browse a plugin index in DSH, enable its experimental Custom plugin indexes bundle and add an index source; DSH does not ship one by default.
